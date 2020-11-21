from .models import Contact

# For rest-rest_framework
from rest_framework import serializers

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
