import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import ProfileDetails from './components/Profile/ProfileDetails';

function App() {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (index, profile) => {
    const updatedProfiles = [...profiles];
    if (index !== undefined) {
      updatedProfiles[index] = profile;  // Update the profile if index exists
    } else {
      updatedProfiles.push(profile);  // Add new profile
    }
    setProfiles(updatedProfiles);
  };

  const deleteProfile = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Dashboard profiles={profiles} onDelete={deleteProfile} />} />
          <Route path="/edit-profile/:index?" element={<EditProfile profiles={profiles} onSave={addProfile} />} />
          <Route path="/profile-details/:index" element={<ProfileDetails profiles={profiles} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
