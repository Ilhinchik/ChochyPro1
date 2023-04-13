from rest_framework import serializers

from .models import User



class UserSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=255)
    last_name = serializers.CharField(max_length=255)
    group = serializers.CharField(max_length=255)
    money = serializers.IntegerField()