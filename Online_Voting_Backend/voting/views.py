from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from djoser.views import UserViewSet
from rest_framework.decorators import action
from .models import VoterProfile,Candidate
from .serializers import VoterProfileSerializer,CandidateSerializer,VoteSerializer
from rest_framework.exceptions import PermissionDenied, NotFound, ValidationError
from django.db import transaction
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
class VoterProfileViewset(viewsets.ModelViewSet):
    serializer_class = VoterProfileSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return VoterProfile.objects.all()
        return VoterProfile.objects.filter(voter=user)

    def get_permissions(self):
        if self.action in ['create']:
            return [IsAuthenticated()]
        if self.action in ['list', 'retrieve', 'update', 'partial_update']:
            return [IsAuthenticated()]
        return [IsAdminUser()]

    def perform_create(self, serializer):
        user = self.request.user
        if VoterProfile.objects.filter(voter=user).exists():
            raise ValidationError("You already have a profile.")
        serializer.save(voter=user)


class CandidateViewset(viewsets.ModelViewSet):
    queryset=Candidate.objects.all()
    serializer_class=CandidateSerializer
    permission_classes=[IsAuthenticated]
    
    def get_permissions(self):
        if self.action in ['list']:
            return [IsAuthenticated()]
        if self.action in ['create', 'retrieve', 'update', 'partial_update']:
            return [IsAdminUser()]
        return [IsAdminUser()]
    from rest_framework.exceptions import NotFound, ValidationError

    def get_candidate(self):
        candidate_id = self.request.data.get('candidate_id')  
        if not candidate_id:
            raise ValidationError("Candidate ID is required.")

        try:
            # Attempt to get the Candidate object based on the provided ID
            candidate = Candidate.objects.get(id=candidate_id)
        except Candidate.DoesNotExist:
            raise NotFound("Candidate not found.")  
        

        return candidate
    


    @action(detail=False, methods=['post'], serializer_class=VoteSerializer)
    def vote(self, request):
        user = self.request.user 

        # Check if the voter's profile exists
        try:
            profile = VoterProfile.objects.get(voter=user)
        except VoterProfile.DoesNotExist:
            raise NotFound("Voter profile not found. Please complete your profile before voting.")

        # Check if the user has already voted
        if profile.has_voted:
            raise PermissionDenied("You have already voted.")          

        # Validate the vote request
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Retrieve the candidate to vote for
        candidate = self.get_candidate()

        # Cast the vote atomically
        with transaction.atomic():
            candidate.votes += 1
            candidate.save()
            profile.has_voted = True
            profile.save()

        return Response(
            {"message": "Vote successfully cast", "candidate_votes": candidate.votes},
            status=status.HTTP_200_OK
        )

@csrf_exempt
def custom_404_view(request, exception):
    return JsonResponse({
        "status": 404,
        "error": "NOT_FOUND",
        "message": "The requested resource was not found."
    }, status=404)

def custom_500_view(request):
    return JsonResponse({
        "status": 500,
        "error": "SERVER_ERROR",
        "message": "An unexpected error occurred."
    }, status=500)

