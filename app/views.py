from django.shortcuts import render
from django.shortcuts import HttpResponse
from .models import *

# Create your views here.

def home(request):
    return HttpResponse("Hi Kiran welcome to the GroupIN")
def index(request):
    return render (request, 'index.html')
def team(request):
    return render (request, 'team.html')
def demo(request):
    post = Results.objects.all()
    context = {
        'post': post,
    }
    return render (request, 'demo.html',context)
