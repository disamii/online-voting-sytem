# myapp/middleware.py

from django.http import JsonResponse
from django.utils.deprecation import MiddlewareMixin

class Handle404Middleware(MiddlewareMixin):
    def process_response(self, request, response):
        if response.status_code == 404:
            json_response = JsonResponse({
                "status": 404,
                "error": "NOT_FOUND",
                "message": "The requested resource was not found.",
                "details": ''
            })
            json_response.status_code = 404  # Explicitly set the status code here
            return json_response
        return response
