from .models import Businessman
from .serializers import BusinessmanSerializer

# for rest-framework
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions


# Create your views here.
class BusinessmanListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Businessman.objects.all()
    serializer_class = BusinessmanSerializer
    pagination_class = None

class BusinessmanView(RetrieveAPIView):
    queryset = Businessman.objects.all()
    serializer_class = BusinessmanSerializer

class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Businessman.objects.filter(top_seller=True)
    serializer_class = BusinessmanSerializer
    pagination_class = None