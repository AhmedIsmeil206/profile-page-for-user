import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = ({ profiles, onDelete }) => {
  const navigate = useNavigate();
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(null);

  const handleViewProfile = (index) => {
    setSelectedProfileIndex(index);
    setShowPasswordPrompt(true);  // Show the password prompt before navigation
  };

  const handlePasswordSubmit = () => {
    if (enteredPassword === profiles[selectedProfileIndex].password) {
      navigate(`/profile-details/${selectedProfileIndex}`);
    } else {
      alert('Incorrect password!');
    }
    setShowPasswordPrompt(false);  // Hide the password prompt
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Dashboard</h2>
      <Link to="/edit-profile" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">Add New Profile</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
            onClick={() => handleViewProfile(index)}
          >
            <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Preferences:</strong> {Array.isArray(profile.preferences) ? profile.preferences.join(', ') : profile.preferences}</p>

            <div className="mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent redirect when clicking delete
                  onDelete(index);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent redirect when clicking edit
                  navigate(`/edit-profile/${index}`);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPasswordPrompt && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Enter Password</h3>
            <input
              type="password"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <button onClick={handlePasswordSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
