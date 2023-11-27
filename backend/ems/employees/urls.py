from django.urls import path, include
from . import views



urlpatterns = [
    path('employees/', views.EmployeeListCreateView.as_view(), name='employee-list-create'),
    path('employees/<int:pk>/', views.EmployeeDetailView.as_view(), name='employee-detail'),
    path('employee/', include('employees.urls')), 
]
