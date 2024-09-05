import React from 'react';

const WorkoutLog = ({ workouts }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Workout Log</h2>
      <ul className="mt-4">
        {workouts.map((workout, index) => (
          <li key={index} className="mb-2 p-2 border-b">
            <p><strong>Date:</strong> {workout.date}</p>
            <p><strong>Exercise:</strong> {workout.exercise}</p>
            <p><strong>Duration:</strong> {workout.duration} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutLog;
