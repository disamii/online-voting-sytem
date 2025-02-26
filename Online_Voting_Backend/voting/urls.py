from rest_framework import routers
from django.urls import path, include
from .views import VoterProfileViewset, CandidateViewset
from .views import voted_vs_registerd



router = routers.DefaultRouter()
router.register(r'voter_profile', VoterProfileViewset, basename='voter_profile')
router.register(r'candidate', CandidateViewset, basename='candidate')

urlpatterns = [
    path('', include(router.urls)),
        path('voted-vs-registered/', voted_vs_registerd, name='voted-vs-registered'),

]
