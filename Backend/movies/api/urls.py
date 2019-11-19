from django.urls import path

from .adminViews import (
    MovieAdminListView as adminMovieListView,
    MovieAdminDetailView as adminMovieDetailView,
    MovieAdminCreateView as adminMovieCreateView,
    MovieAdminUpdateView as adminMovieUpdateView,
    MovieAdminDeleteView as adminMovieDeleteView
)

urlpatterns = [
    ## Admin pathS
    path('', adminMovieListView.as_view()),
    path('<pk>', adminMovieDetailView.as_view()),
    path('create/', adminMovieCreateView.as_view()),
    path('<pk>/update/', adminMovieUpdateView.as_view()),
    path('<pk>/delete/', adminMovieDeleteView.as_view()),
]
