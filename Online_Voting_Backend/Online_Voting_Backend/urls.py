from django.contrib import admin
from django.urls import path, include
from django.conf.urls import handler404, handler500
from voting.views import custom_404_view, custom_500_view

handler404 = custom_404_view
handler500 = custom_500_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('api/',include('voting.urls')),
    # path('<path:resource>', custom_404_view),
]
