import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Fitness Tracker</h1>
      <p className="text-lg mb-6">Track your workouts, monitor progress, and achieve your fitness goals.</p>
      <Link to="/dashboard" className="bg-blue-500 text-white py-2 px-4 rounded">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
