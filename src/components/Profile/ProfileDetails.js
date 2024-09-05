import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = ({ profiles }) => {
  const { index } = useParams();
  const profile = profiles[index];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Profile Details</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Preferences:</strong> {Array.isArray(profile.preferences) ? profile.preferences.join(', ') : profile.preferences}</p>
      <p><strong>Contact:</strong> {profile.contact}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default ProfileDetails;
