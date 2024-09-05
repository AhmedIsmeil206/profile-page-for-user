import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Profile Information</h2>
        <div className="space-y-4">
          <div>
            <p className="font-bold">Name:</p>
            <p>{user.name}</p>
          </div>
          <div>
            <p className="font-bold">Email:</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="font-bold">Phone:</p>
            <p>{user.phone || "N/A"}</p>
          </div>
          <div>
            <p className="font-bold">Preferences:</p>
            <p>{Array.isArray(user.preferences) ? user.preferences.join(', ') : user.preferences || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
