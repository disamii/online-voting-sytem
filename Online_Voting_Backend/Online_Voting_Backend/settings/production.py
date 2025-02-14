from .base import *

# Production-specific settings
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com']

# Database (using MySQL for production)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_prod_db_name',  # Your production database name
        'USER': 'your_prod_db_user',  # Your production database user
        'PASSWORD': 'your_prod_db_password',  # Your production database password
        'HOST': 'your_prod_db_host',  # Production database host
        'PORT': '3306',  # Default MySQL port
    }
}

# Other production-specific settings
SECURE_SSL_REDIRECT = True
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True
