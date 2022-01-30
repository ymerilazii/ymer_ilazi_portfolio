from django.shortcuts import render, redirect
from django.views.generic import ListView
from .models import Projects, Contact


def index(request):
    return render(request, 'index.html', {})


class ProjectsView(ListView):
    template_name = 'projects.html'
    model = Projects


class ContactView(ListView):
    template_name = 'contact.html'
    model = Contact


def terminal(request):
    pages = ['index', 'projects', 'contact']
    page = int(request.POST['page'])
    return redirect(pages[page - 1])
