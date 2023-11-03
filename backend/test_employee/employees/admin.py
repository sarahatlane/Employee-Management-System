from django.contrib import admin
from .models import Item
# Register your models here.
from .models import Employee  # Import your Employee model (adjust the import based on your model's location)

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'hire_date')
    list_filter = ('department', 'hire_date')
    search_fields = ('first_name', 'last_name', 'email')
    date_hierarchy = 'hire_date'

admin.site.register(Item)