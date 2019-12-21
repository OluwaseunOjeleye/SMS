from django.urls import path

from .adminViews import (
    MovieAdminListView as adminMovieListView,
    MovieAdminDetailView as adminMovieDetailView,
    MovieAdminCreateView as adminMovieCreateView,
    MovieAdminUpdateView as adminMovieUpdateView,
    MovieAdminDeleteView as adminMovieDeleteView
)

from .userViews import (
    MovieUserListView as userMovieListView,
    MovieUserDetailView as userMovieDetailView,
)

from . import userViews


urlpatterns = [
    ## Admin URLS
    path('', adminMovieListView.as_view()),
    path('<pk>', adminMovieDetailView.as_view()),
    path('create/', adminMovieCreateView.as_view()),
    path('<pk>/update/', adminMovieUpdateView.as_view()),
    path('<pk>/delete/', adminMovieDeleteView.as_view()),

    ##User URLS
    path('result/', userMovieListView.as_view()),
    path('result/<pk>', userMovieDetailView.as_view()),

    ##Suggest
    path('suggest/', userViews.get_UserData),

]