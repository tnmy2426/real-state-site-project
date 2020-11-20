from .models import Businessman

# For rest-rest_framework
from rest_framework import serializers


class BusinessmanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Businessman
        fields = '__all__'

