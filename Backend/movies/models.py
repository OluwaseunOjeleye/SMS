# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

#Create a movie class
class Movie(models.Model):			
    title = models.CharField(max_length=140)	
    directors = models.TextField()
    actors = models.TextField()
    plot = models.TextField()
    year = models.IntegerField()  #Just an integer value can be use(Next time will be limited)  
    genres = models.TextField()

    def __str__(self):
        return '{} ({})'.format(self.title, self.year)
