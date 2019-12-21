
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.generics import (
    RetrieveAPIView,
)

from ..models import Movie
from .serializers import MovieSerializer

import pandas as pd
import datetime
import os
from ..RecommendationSystem import recommend_v3 as Recommend
from django.db.models import Case, When
from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView


#global variable for storing the ids of movie to recommend
recommendation_movie_ids=[] 

#Method for listening to User's POST request
@csrf_exempt
def get_UserData(request):
    if request.method=="POST":
        data=request.POST

        ##getting user's inputs
        search_type=data.get("searchtype", "0")
        movie_name=data.get("moviename", "0")
        no_of_movies=int(data.get("numberofmovies", "0"))
        
        global recommendation_movie_ids
        recommendation_movie_ids=suggest_Movies(search_type, movie_name, no_of_movies)

        if(len(recommendation_movie_ids)!=0):
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=400)


# Function That calls The Movie Recommending System
def suggest_Movies(search_type, movie_name, no_of_movies):
    #querying all movies info from the database
    movie_table= pd.DataFrame(list(Movie.objects.all().values('title', 'genres', 'directors', 'actors', 'plot')))
    movies_id_no=pd.DataFrame(list(Movie.objects.all().values('id')))

    #Creating Recommendation System object
    Recommender=Recommend.MovieRS(search_type, movie_table, movies_id_no)
    #getting recommended movies from recommendation system
    recommended_movie_ids=Recommender.Recommend(movie_name, no_of_movies)

    if(len(recommended_movie_ids)!=0):
        print(recommended_movie_ids)
        return recommended_movie_ids
    else:
        return []


#Result List API View Class- for getting the recommended 
""" movies details from db and sending the result in JSON format to endpoint API api/results"""
class MovieUserListView(APIView):
    def get(self, request):
        global recommendation_movie_ids
        preserved = Case(*[When(pk=pk, then=pos) for pos, pk in enumerate(recommendation_movie_ids)])
        queryset = Movie.objects.filter(pk__in=recommendation_movie_ids).order_by(preserved)
        serializer_class = MovieSerializer(queryset, many=True)
        return Response(serializer_class.data)


class MovieUserDetailView(RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    #permission_classes = (permissions.AllowAny, )