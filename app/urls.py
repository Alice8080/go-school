from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('', views.index),
    path('api/mail', MailView.as_view()),
]