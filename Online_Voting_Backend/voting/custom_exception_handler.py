from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError, AuthenticationFailed, NotFound
from django.http import Http404

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        if isinstance(exc, ValidationError):
            response.data = {
                "status": response.status_code,
                "error": "VALIDATION_ERROR",
                "message": "Validation failed.",
                "details": response.data  
            }
        elif isinstance(exc, AuthenticationFailed):
            response.data = {
                "status": response.status_code,
                "error": "INVALID_TOKEN",
                "message": "The provided token is invalid or has expired.",
                "details": None  
            }
        elif isinstance(exc, NotFound):
            response.data = {
            "status": response.status_code,
            "error": "NOT_FOUND",
            "message": "The requested resource was not found.",
            "details": None  
        }
        else:
            response.data = {
                "status": response.status_code,
                "error": "SERVER_ERROR",
                "message": "An unexpected error occurred.",
                "details": response.data
            }
    else:
        response = Response(
            data={
                "status": 500,
                "error": "SERVER_ERROR",
                "message": "An unexpected error occurred.",
                "details": None
            },
            status=500
        )
    
    return response
