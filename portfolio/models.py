from django.db import models


class SocialNetworks(models.Model):
    social = models.CharField(max_length=32, blank=False, unique=True)
    link = models.URLField(blank=False)
    icon_code = models.CharField(max_length=32, blank=False)

    def __str__(self):
        return self.social.capitalize()


class Technologies(models.Model):
    tech_name = models.CharField(max_length=64, blank=False, unique=True)

    def __str__(self):
        return self.tech_name.upper()


class Projects(models.Model):
    project_name = models.CharField(max_length=96, blank=False, unique=True)
    workflow = models.TextField(max_length=1000, blank=False)
    project_image = models.ImageField(blank=False)
    technologies = models.ManyToManyField(Technologies)

    def __str__(self):
        return self.project_name.title()


class Contact(models.Model):
    firstname = models.CharField(max_length=48, blank=False)
    lastname = models.CharField(max_length=48, blank=False)
    email = models.CharField(max_length=256, blank=False, unique=True)
    phone_number = models.CharField(max_length=18, blank=False, unique=True)

    def __str__(self):
        return f'{self.firstname} {self.lastname}'.title()
