import React, { useEffect, useState } from 'react';
// import Attendance from './attendance';
import RegisteredCourses from './registeredCourses';
import CourseRegistration from './RegisterForCourses';
import Axios from 'axios';

const Attendance = () => {
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  // Fetch registered courses data and attendance data from backend on component mount
  useEffect(() => {
    // Fetch registered courses data
    Axios.get('/api/courses') 
      .then(response => {
        // Update registered courses state with data from backend
        setRegisteredCourses(response.data);
      })
      .catch(error => {
        // Handle error, e.g., show error message
        console.error('Error fetching registered courses:', error);
      });

    // Fetch attendance data
    Axios.get('/api/attendance') 
      .then(response => {
        // Update attendance data state with data from backend
        setAttendanceData(response.data);
      })
      .catch(error => {
        // Handle error, e.g., show error message
        console.error('Error fetching attendance data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Attendance</h1>
      {registeredCourses.length > 0 && attendanceData.length > 0 ? (
        // Render attendance data for registered courses
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Attendance Percentage</th>
            </tr>
          </thead>
          <tbody>
            {registeredCourses.map(course => {
              const attendance = attendanceData.find(item => item.courseId === course.id);
              // Render attendance data for the registered course
              return (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{attendance ? `${attendance.attendancePercentage}%` : 'N/A'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No attendance data available</p>
      )}
    </div>
  );
};

export default Attendance;
