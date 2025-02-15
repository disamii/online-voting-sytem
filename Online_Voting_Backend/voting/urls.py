from rest_framework import routers
from .views import CustomUserViewset

router = routers.DefaultRouter()

router.register(r'user', CustomUserViewset)

urlpatterns = router.urls
