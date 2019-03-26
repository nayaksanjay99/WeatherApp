from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Ledger
from .serializers import LedgerSerializer

class UserList(APIView):

    def get(self,request):
      users=Ledger.objects.all()
      Serializer=LedgerSerializer(users,many=True) 
      return Response(Serializer.data)

    def post(self,request):
      print(request.data)
      print(request.data['key'])
      if request.data['key'] == 1:
        print(request.data['mailid'])
        x=Ledger.objects.get(mailid=request.data['mailid'])
        x.bookmarks=request.data['bookmarks']
        x.save()
        Serializer=LedgerSerializer(x) 
        return Response(Serializer.data)
      else:
        x=Ledger(name=request.data['name'],surname=request.data['surname'],mailid=request.data['mailid'],password=request.data['pass'],bookmarks=request.data['bookmarks'])
        x.save()
        print('-----')
        print(x)
        Serializer=LedgerSerializer(x) 
        return Response(Serializer.data)