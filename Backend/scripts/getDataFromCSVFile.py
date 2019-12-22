
"""
    Script to import data from .csv file to Movie Model Database DJango
    To execute this script run: 
    1) python manage.py shell
    2) exec(open('scripts/getDataFromCSVFile.py').read())
"""

import csv
import pandas as pd
from movies.models import Movie


CSV_PATH = 'movies/RecommendationSystem/dataset.csv'      # Csv file path
begin_index=1   ## row to start from in csv file
total_movies=1000   ## total no of movies to add

## function for adding movies from csv file to the DB
def add_CSVDataToDB():
    try:
        dataset=pd.read_csv(CSV_PATH, header=None)
    except NameError:
        print "File Not Found.", 
    except Exception, e:
        print "Error in reading", base_file
        print e

    movie=[]
    movie_data=[]
    for j in range (begin_index, total_movies):
        name=""
        actors=""
        director=""
        genre=""
        plot=""
        year=0
        for i in range (len(dataset.iloc[0])):
            if(dataset[i][j]!=" "):
                if(i==0):       ## movie name
                    name=dataset[i][j].strip()      #remove white spaces at the beginning and end of movie names
                elif(i==1):
                    genre=dataset[i][j].replace("|", " ")
                elif(i==2):
                    director=dataset[i][j]
                elif(i>=3 and i<=5):
                    actors=actors+" "+dataset[i][j]
                elif(i==6):
                    year=int(dataset[i][j])
                else:
                    plot=dataset[i][j].replace("|", " ")
            else:
                dataset[i][j]=0
        #print("Movie name: "+name+" Genre: "+genre+" director: "+director+" Actors: "+actors+" Year: ",year," Plot: "+plot)
        Movie.objects.create(title=name, directors=director, actors=actors, plot=plot, year=year, genres=genre)

add_CSVDataToDB()
