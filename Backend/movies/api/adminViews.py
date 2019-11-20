
from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)

from ..models import Movie
from .serializers import MovieSerializer

class MovieAdminListView(ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    #permission_classes = (permissions.IsAuthenticated, )


class MovieAdminDetailView(RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    #permission_classes = (permissions.IsAuthenticated, )


class MovieAdminCreateView(CreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    #permission_classes = (permissions.IsAuthenticated, )


class MovieAdminUpdateView(UpdateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    #permission_classes = (permissions.IsAuthenticated, )


class MovieAdminDeleteView(DestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    #permission_classes = (permissions.IsAuthenticated, )
