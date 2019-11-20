from rest_framework import permissions

from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
)

from ..models import Movie
from .serializers import MovieSerializer


class MovieUserListView(ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    #permission_classes = (permissions.AllowAny, )


class MovieUserDetailView(RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    #permission_classes = (permissions.AllowAny, )
