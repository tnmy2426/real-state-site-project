from django.urls import path
from .views import BusinessmanListView, BusinessmanView, TopSellerView


urlpatterns = [
    path('', BusinessmanListView.as_view(), name='businessman_list'),
    path('topseller', TopSellerView.as_view(), name='topseller'),
    path('<pk>', BusinessmanView.as_view(), name='single_businessman'),
    
]