from django.shortcuts import render
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User
from Applications.serializers import ApplicationSerializer
from users.serializers import UserSerializer


# Create your views here.
class UserView(APIView):
    def get(self, request, pk):
        user  = get_object_or_404(User.objects.all(), pk=pk)
        # the many param informs the serializer that it will be serializing more than a single article.
        serializer = UserSerializer(user)
        return Response({"user": serializer.data})

    def post(self, request):
        Application = request.data.get('user')
        # Create an author from the above data
        serializer = ApplicationSerializer(data=Application)
        if serializer.is_valid(raise_exception=True):
            Application_saved = serializer.save()
        return Response({"success": "Application '{}' created successfully".format(Application_saved.title)})
