from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.
from django.db import models

class Employee(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    department = models.CharField(max_length=50)
    # Add more fields as needed

class CustomUserManager(BaseUserManager):
    # Define custom user manager

class CustomUser(AbstractBaseUser):