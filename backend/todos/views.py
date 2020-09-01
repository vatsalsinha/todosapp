from django.shortcuts import render
from .serializers import TodoSerializer
from .models import Todo
from rest_framework import generics

# Create your views here.
class TodoView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

def home_view(request, *args, **kwargs):
    return render(request, "home.html")