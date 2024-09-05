import React from 'react';
import Profile from '../components/Profile/Profile';
import EditProfile from '../components/Profile/EditProfile';

const ProfilePage = () => {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    preferences: [' '],
  });

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    // Add more logic to handle saving the user data, possibly to a backend
  };

  return (
    <div className="p-6">
      <Profile user={user} />
      <EditProfile user={user} onSave={handleSave} />
    </div>
  );
};

export default ProfilePage;
