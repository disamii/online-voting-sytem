from rest_framework import routers
from .views import VoterProfileViewset

router = routers.DefaultRouter()

router.register(r'voter_profile',VoterProfileViewset, basename='voter_profile')

urlpatterns = router.urls
