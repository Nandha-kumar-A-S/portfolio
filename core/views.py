from django.shortcuts import render
from django.contrib import messages
from .forms import ContactForm
from .models import Project


def home(request):
    return render(request, 'core/home.html')

def about(request):
    return render(request, 'core/about.html')

def projects(request):
    projects = Project.objects.all()
    for project in projects:
        project.tech_list = project.tech_stack.split(',')  # 👈 split here
    return render(request, 'core/projects.html', {'projects': projects})


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Save or email logic here
            messages.success(request, "Thanks for contacting me! I'll get back to you soon.")
            form = ContactForm()  # Clear form
    else:
        form = ContactForm()
    return render(request, 'core/contact.html', {'form': form})