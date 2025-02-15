from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny,IsAuthenticated,IsAdminUser
from djoser.views import UserViewSet
from .models import CustomUser,VoterProfile,Candidate
from .serializers import VoterProfileSerializer
from rest_framework.serializers import ValidationError

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


        

