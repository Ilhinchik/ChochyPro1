from django.shortcuts import render

# Create your views here.
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Application
from .serializers import ApplicationSerializer


class ApplicationView(APIView):
    def get(self, request):
        applications = Application.objects.all()
        # the many param informs the serializer that it will be serializing more than a single article.
        serializer = ApplicationSerializer(applications, many=True)
        return Response({"applications": serializer.data})

    def post(self, request):
        Application = request.data.get('Application')
        # Create an article from the above data
        serializer = ApplicationSerializer(data=Application)
        if serializer.is_valid(raise_exception=True):
            Application_saved = serializer.save()
        return Response({"success": "Application '{}' created successfully".format(Application_saved.title)})

    def put(self, request, pk):
        saved_application = get_object_or_404(Application.objects.all(), pk=pk)
        data = request.data.get('Applications')
        serializer = ApplicationSerializer(instance=saved_application, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            Application_saved = serializer.save()
        return Response({
            "success": "Application '{}' updated successfully".format(Application_saved.title)
        })

    '''def delete(self, request, pk):
    # Get object with this pk
    article = get_object_or_404(Article.objects.all(), pk=pk)
    article.delete()
    return Response({
        "message": "Article with id `{}` has been deleted.".format(pk)
    }, status=204)'''