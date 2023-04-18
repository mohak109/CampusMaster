// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import { Routes, Route } from "react-router-dom";
// import StudDashboard from './components/student/StudDashboard';
// import FacDashboard from './components/faculty/FacDashboard';
// import AdmDashboard from './components/admin/AdmDashboard';
// import ViewStud from './components/admin/ViewStudents';
// import AddNewStudent from './components/admin/AddStudent';
// import ViewFac from './components/admin/ViewFaculty';
// import AddNewFaculty from './components/admin/AddFaculty';
// import ViewCour from './components/admin/ViewCourses';
// import AddNewCourse from './components/admin/AddCourse';
// import AcadCal from './components/admin/ViewAcadCal';
// import HonorsList from './components/admin/viewHonors';
import Homepage from './components/admin/homepage';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/adm/:url" element={<Homepage />} />

          <Route path="*" element={<LoginForm />} />
        </Routes>
      </>

    )
  };
}

export default App;
