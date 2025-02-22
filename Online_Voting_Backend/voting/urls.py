from rest_framework import routers
from django.urls import path, include
from .views import VoterProfileViewset, CandidateViewset


router = routers.DefaultRouter()
router.register(r'voter_profile', VoterProfileViewset, basename='voter_profile')
router.register(r'candidate', CandidateViewset, basename='candidate')

# Including the router URLs
urlpatterns = [
    path('', include(router.urls)),
]
