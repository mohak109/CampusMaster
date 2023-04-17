import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const RegisteredCourses = () => {
  const [registeredCourses, setRegisteredCourses] = useState([]);

  // Fetch registered courses data from backend on component mount
  useEffect(() => {
    Axios.get('/api/courses') 
      .then(response => {
        // Update registered courses state with data from backend
        setRegisteredCourses(response.data);
      })
      .catch(error => {
        // Handle error, e.g., show error message
        console.error('Error fetching registered courses:', error);
      });
  }, []);

  return (
    <div>
      <h1>Registered Courses</h1>
      {registeredCourses.length > 0 ? (
        // Render registered courses list
        <ul>
          {registeredCourses.map(course => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      ) : (
        <p>No courses registered</p>
      )}
    </div>
  );
};

export default RegisteredCourses;
