from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.core.mail import send_mail
from .serializers import RecordSerializer
from dotenv import load_dotenv
import os

load_dotenv()

def index(request):
    return render(request, 'build/index.html')

class MailView(APIView):
    def post(self, request, format=None):
        serializer = RecordSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            email_host = os.getenv("EMAIL_HOST_USER")
            data = f"""
            Здравствуйте, {name}! Вы записались на занятие в Школе го. Мы свяжемся с Вами, чтобы уточнить дату первого занятия. 


            С уважением, 
            Школа го
            """            
            send_mail('Запись на занятие в Школе го', data, email_host, [email], fail_silently=False)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

