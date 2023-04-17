import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Attendance from './attendance';
import RegisteredCourses from './registeredCourses';
import CourseRegistration from './RegisterForCourses';
import { Route, Routes } from 'react-router-dom';


const Dashboard = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [registeredCoursesData, setRegisteredCoursesData] = useState([]);

  useEffect(() => {
    // Fetch attendance data
    axios.get('/api/attendance')
      .then(response => {
        setAttendanceData(response.data);
      })
      .catch(error => {
        console.error('Error fetching attendance data:', error);
      });

    // Fetch registered courses data
    axios.get('/api/registered-courses')
      .then(response => {
        setRegisteredCoursesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching registered courses data:', error);
      });
  }, []);

  // Render dashboard content
  return (
    <div>
      <h1>Dashboard</h1>
      {/* routes for components within the dashboard */}
      <Routes>
        {/* Route for Attendance component */}
        <Route path="/attendance" render={() => <Attendance attendanceData={attendanceData} />} />
        {/* Route for RegisteredCourses component */}
        <Route path="/registered-courses" render={() => <RegisteredCourses registeredCoursesData={registeredCoursesData} />} />
        {/* Route for RegisterForCourses component */}
        {/* <Route path="/register-for-courses" render={() => <RegisterForCourses registerForCoursesData={registerForCoursesData} />} /> */}

      </Routes>
    </div>
  )
};

//     <div>
//       <h1>Dashboard</h1>
//       {/* Render attendance data */}
//       <h2>Attendance</h2>
//       <ul>
//         {attendanceData.map(attendance => (
//           <li key={attendance.id}>{attendance.courseName}: {attendance.attendancePercentage}%</li>
//         ))}
//       </ul>
//       {/* Render registered courses data */}
//       <h2>Registered Courses</h2>
//       <ul>
//         {registeredCoursesData.map(course => (
//           <li key={course.id}>{course.courseName}</li>
//         ))}
//       </ul>
//       {/* Add additional content and components for the dashboard */}
//     </div>
//   );



export default Dashboard;


// import React from "react";

// class StudDashboard extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome to Student Dashboard</h1>
//             </div>
//         );
//     }
// }

// export default StudDashboard;