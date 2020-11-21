from .models import Contact
from .serializers import Contact 

# For Email Sending
from django.core.mail import send_mail

# FOR Rest-framework
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions

# Create your views here.

class ContactCreateView(APIView):
    permission_classes = ( permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        try:
            send_mail(
                data['subject'],
                'Name: '
                + data['name']
                + '\nEmail: '
                + data['email']
                + '\n\nMessage:\n'
                + data['message'],
                'abdullah.al.nahdi2426@gmail.com',
                ['al.nahdi.tnmy@gmail.com', 'abdullah.al.nahdi2426@gmail.com',],
                fail_silently= False
            )

            contact = Contact(name=data['name'], email=data['email'], subject=data['subject'], message=data['message'])
            contact.save()
            return Response({'success': 'Message Sent Successfully'})

        except:
            return Response({'error': 'Failed to sent message!'})