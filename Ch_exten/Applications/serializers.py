from rest_framework import serializers

from .models import Application


class ApplicationSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=120)
    reason = serializers.CharField(max_length=120)
    details = serializers.CharField(max_length=255)

    user_id = serializers.IntegerField()
    
    def create(self, validated_data):
        return Application.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.reason = validated_data.get('reason', instance.reason)
        instance.details = validated_data.get('details', instance.details)
        instance.author_id = validated_data.get('author_id', instance.author_id)
        instance.save()
        return instance

    