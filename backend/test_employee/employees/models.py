from django.db import models

# Create your models here.


class Department(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Role(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    hire_date = models.DateField()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
