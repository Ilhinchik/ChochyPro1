from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):

    money = models.IntegerField(null=True, blank=True)
    group = models.CharField(default=True, max_length=50)

# Create your models here.
