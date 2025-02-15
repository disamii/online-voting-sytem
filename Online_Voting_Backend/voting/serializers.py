from rest_framework import serializers
from .models import CustomUser,VoterProfile
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken

class CustomUserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'national_id', 'password']

    def create(self, validated_data):
            # Hash the password
            password = validated_data.pop('password')
            user = CustomUser(**validated_data)
            user.password = make_password(password)
            user.save()

            # Generate tokens
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            # Attach tokens to the context
            self.context['access_token'] = access_token
            self.context['refresh_token'] = str(refresh)

            return user

    def to_representation(self, instance):
            # Default representation of the user
            representation = super().to_representation(instance)

            # Add tokens to the response
            representation['access_token'] = self.context.get('access_token')
            representation['refresh_token'] = self.context.get('refresh_token')

            return representation

class VoterProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = VoterProfile
        fields = [
            'id', 'voter', 'first_name', 'last_name', 'date_of_birth', 'gender', 'address',
            'region',  'photo', 'biometric_data', 'has_voted', 'registration_date', 'updated_at'
        ]
        read_only_fields = ['has_voted', 'registration_date', 'updated_at','voter']


    def validate_voter_id(self, value):
        """Ensure voter_id is exactly 20 characters."""
        if len(value) != 20:
            raise serializers.ValidationError("Voter ID must be exactly 20 characters.")
        return value

    def validate_date_of_birth(self, value):
        """Ensure the user is at least 18 years old."""
        from datetime import date
        today = date.today()
        age = today.year - value.year - ((today.month, today.day) < (value.month, value.day))
        if age < 18:
            raise serializers.ValidationError("Voter must be at least 18 years old.")
        return value

