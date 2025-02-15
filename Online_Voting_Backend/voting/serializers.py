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
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.password = make_password(password)
        user.save()
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        # Include the token in the response
        return {
            'user': user,
            'access_token': access_token,
            'refresh_token': str(refresh),
        }





class VoterProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = VoterProfile
        fields = [
            'id', 'user', 'first_name', 'last_name', 'date_of_birth', 'gender', 'address',
            'region', 'voter_id', 'photo', 'biometric_data', 'has_voted', 'registration_date', 'updated_at'
        ]
        read_only_fields = ['has_voted', 'registration_date', 'updated_at']

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

    def create(self, validated_data):
        """Link the authenticated user to the VoterProfile."""
        user = self.context['request'].user
        validated_data['user'] = user
        return VoterProfile.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """Custom logic during update if needed."""
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
