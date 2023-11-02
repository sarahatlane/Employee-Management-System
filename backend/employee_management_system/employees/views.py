from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_jwt.views import ObtainJSONWebToken

@api_view(['POST'])
@permission_classes([AllowAny])
def user_register(request):
    # Handle user registration logic here
    # Validate input data and create a new user

    if registration_successful:
        return Response({"message": "User registered successfully."}, status=status.HTTP_201_CREATED)
    else:
        return Response({"message": "User registration failed."}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def user_login(request):
    # Handle user login logic here
    # Authenticate user and generate a JWT token

    if login_successful:
        return Response({"token": "your_jwt_token_here"}, status=status.HTTP_200_OK)
    else:
        return Response({"message": "Login failed."}, status=status.HTTP_401_UNAUTHORIZED)
