from .models import Listing

# For rest-rest_framework
from rest_framework import serializers

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = [ 'title', 'slug', 'address', 'city', 'state', 'zipcode', 'description', 'sale_type', 'price', 'home_type', 'bedrooms', 'sqrft', 'open_house', 'photo_main' ]

class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'