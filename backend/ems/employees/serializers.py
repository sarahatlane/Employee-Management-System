from rest_framework import serializers
from .models import Employee

#to convert models to JSON and vice versa using Django REST Framework serializers:
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'first_name', 'last_name', 'email', 'department', 'hire_date', 'salary']
       