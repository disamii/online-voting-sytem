from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from djoser.views import UserViewSet
from rest_framework.decorators import action
from .models import VoterProfile,Candidate
from .serializers import VoterProfileSerializer,CandidateSerializer,VoteSerializer
from rest_framework.exceptions import PermissionDenied, NotFound, ValidationError
from django.db import transaction
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
class VoterProfileViewset(viewsets.ModelViewSet):
    serializer_class = VoterProfileSerializer
    

    def get_queryset(self):
        user = self.request.user
        try:
            if user.is_staff:
                return VoterProfile.objects.all()
            else:
                return VoterProfile.objects.filter(voter=user)
        except VoterProfile.DoesNotExist:
            raise NotFound("Voter profile not found.")


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
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer

    def get_permissions(self):
        if self.action in ["list", "option", "vote"]:  # Allow authenticated users to vote
            return [IsAuthenticated()]
        if self.action in ["create", "retrieve", "update", "partial_update"]:
            return [IsAdminUser()]
        return [IsAdminUser()]


    def get_candidate(self, request):
        candidate_id = request.data.get("candidate_id")
        if not candidate_id:
            raise ValidationError({"candidate_id": "Candidate ID is required."})

        try:
            candidate = Candidate.objects.get(id=candidate_id)
        except Candidate.DoesNotExist:
            raise NotFound({"candidate_id": "Candidate not found."})

        return candidate

    @action(detail=False, methods=["post"], permission_classes=[IsAuthenticated])
    def vote(self, request):
        user = request.user

        # Check if the voter's profile exists
        try:
            profile = VoterProfile.objects.get(voter=user)
        except VoterProfile.DoesNotExist:
            raise NotFound({"detail": "Voter profile not found. Please complete your profile before voting."})

        # Check if the user has already voted
        if profile.has_voted:
            raise PermissionDenied({"detail": "You have already voted."})

        # Validate the vote request
        serializer = VoteSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Retrieve the candidate to vote for
        candidate = self.get_candidate(request)

        # Cast the vote atomically
        with transaction.atomic():
            candidate.votes += 1
            candidate.save()
            profile.has_voted = True
            profile.save()

        return Response(
            {"message": "Vote successfully cast", "candidate_votes": candidate.votes},
            status=status.HTTP_200_OK,
        )

@api_view(['GET'])
def voted_vs_registerd(request):
    registered_user=VoterProfile.objects.count()
    has_voted=VoterProfile.objects.filter(has_voted=True).count()
    return Response({
        'registered_user':registered_user,
        'already_voted':has_voted
    })