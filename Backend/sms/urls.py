"""sms URL Configuration"""
from django.conf.urls import url,include
from django.contrib import admin
from rest_framework import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url('api-auth/', include('rest_framework.urls')),
]
