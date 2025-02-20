from .base import *

DEBUG = True
ALLOWED_HOSTS = ['localhost', '127.0.0.1']
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]

CSRF_TRUSTED_ORIGINS = [
    'http://localhost:5173',  
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'voting_system',  
        'USER': 'root',  
        'PASSWORD': 'disSAMI!123',  
        'HOST': 'localhost',  
        'PORT': '3306',  
    }
}
