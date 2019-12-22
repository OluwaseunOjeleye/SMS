
"""
    Script to import data from .csv file to Movie Model Database DJango
    To execute this script run: 
    1) manage.py shell
    2) exec(open('scripts/deleteAllMovies.py').read())
"""


import csv
import pandas as pd
from movies.models import Movie


## Function for deleting all movies in DB
def delete_AllMovies():
    Movie.objects.all().delete()


delete_AllMovies()
