from django.urls import path
from .views import ListingView, ListingsViews, SearchView

urlpatterns = [
    path('', ListingsViews.as_view()),
    path('search', SearchView.as_view()),
    path('<slug>', ListingView.as_view()),
]