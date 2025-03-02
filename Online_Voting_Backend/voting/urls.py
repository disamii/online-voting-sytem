from rest_framework import routers
from django.urls import path, include
from .views import VoterProfileViewset, CandidateViewset, StatsViewSet

router = routers.DefaultRouter()
router.register(r'voter_profile', VoterProfileViewset, basename='voter_profile')
router.register(r'candidate', CandidateViewset, basename='candidate')
router.register(r'stats', StatsViewSet, basename='stats')  # Register StatsViewSet

urlpatterns = [
    path('', include(router.urls)),  
]
