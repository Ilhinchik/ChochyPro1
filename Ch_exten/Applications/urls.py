from django.urls import path
from .views import ApplicationView

app_name = "Applications"
# app_name will help us do a reverse look-up latter.
urlpatterns = [
    path('applications/', ApplicationView.as_view()),
]