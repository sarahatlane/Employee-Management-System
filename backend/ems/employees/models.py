from django.db import models

# Create your models here.

class Employee(models.Model):
    # Defined fields for the Employee model
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    department = models.CharField(max_length=100)
    hire_date = models.DateField()
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    
    # Optional: Defined any additional methods or meta information
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
