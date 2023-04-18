import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Attendance from './New folder/attendance';
import RegisteredCourses from './New folder/registeredCourses';
import CourseRegistration from './New folder/RegisterForCourses';
import { Route, Routes } from 'react-router-dom';


const StuDashboard = () => {

  // Render dashboard content
  return (
    <div className='p-7 text-xl font-semibold flex-1 h-screen overflow-auto'>
      <h1>Dashboard</h1>
    </div>
  )
};

export default StuDashboard;
