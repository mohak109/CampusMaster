// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import { Routes, Route } from "react-router-dom";
import StudDashboard from './components/student/StudDashboard';
import FacDashboard from './components/faculty/FacDashboard';
import AdmDashboard from './components/admin/AdmDashboard';
import ViewStud from './components/admin/ViewStudents';
import AddNewStudent from './components/admin/AddStudent';
import ViewFac from './components/admin/ViewFaculty';
import AddNewFaculty from './components/admin/AddFaculty';
import ViewCour from './components/admin/ViewCourses';
import AddNewCourse from './components/admin/AddCourse';
import AcadCal from './components/admin/ViewAcadCal';
import HonorsList from './components/admin/viewHonors';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/studash" element={<StudDashboard />} />
          <Route path="/facdash" element={<FacDashboard />} />
          <Route path="/admdash" element={<AdmDashboard />} />
          <Route path="/viewstud" element={<ViewStud />} />
          <Route path="/addstud" element={<AddNewStudent />} />
          <Route path="/viewfac" element={<ViewFac />} />
          <Route path="/addfac" element={<AddNewFaculty />} />
          <Route path="/viewcour" element={<ViewCour />} />
          <Route path="/addcour" element={<AddNewCourse />} />
          <Route path="/viewacadcal" element={<AcadCal />} />
          <Route path="/viewhonors" element={<HonorsList />} />

          <Route path="*" element={<LoginForm />} />
        </Routes>
      </>

    )
  };
}

export default App;
