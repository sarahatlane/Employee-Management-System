from django.shortcuts import render

from rest_framework import generics
from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



# Create your views here.
class EmployeeListCreateView(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer  # Define your custom serializer here