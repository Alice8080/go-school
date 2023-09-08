from rest_framework import serializers
from .models import Record

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ('__all__')
    
    def create(self, validated_data):
        return Record.objects.create(**validated_data)
