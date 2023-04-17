import React, { useState } from 'react';
import Axios from 'axios';

const CourseRegistration = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Function to handle course selection
  const handleCourseSelect = (courseId) => {
    // Check if course is already selected
    const alreadySelected = selectedCourses.includes(courseId);
    if (alreadySelected) {
      // If already selected, remove from selected courses
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    } else {
      // If not selected, add to selected courses
      setSelectedCourses([...selectedCourses, courseId]);
    }
  };

  // Function to handle course registration
  const handleRegistration = () => {
    // Make API call to backend to register for courses
    Axios.post('/api/register', { courses: selectedCourses }) // Update the API endpoint based on our backend implementation
      .then(response => {
        // Handle success, e.g., show confirmation message
        console.log('Successfully registered for courses:', response.data);
      })
      .catch(error => {
        // Handle error, e.g., show error message
        console.error('Error registering for courses:', error);
      });
  };

  return (
    <div>
      <h1>Course Registration</h1>
      <ul>
        {/* Render course list */}
        <li onClick={() => handleCourseSelect('course1')}>
          Course 1
        </li>
        <li onClick={() => handleCourseSelect('course2')}>
          Course 2
        </li>
        <li onClick={() => handleCourseSelect('course3')}>
          Course 3
        </li>
        {/* From here we can add more courses */}
      </ul>
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default CourseRegistration;
