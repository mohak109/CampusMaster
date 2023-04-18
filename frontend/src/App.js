// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import { Routes, Route } from "react-router-dom";
// import StudDashboard from './components/student/StudDashboard';
import FacDashboard from './components/faculty/FacDashboard';
import AdmHomepage from './components/admin/homepage';
import StuHomepage from './components/student/homepage';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/adm/:url" element={<AdmHomepage />} />
          <Route path="/stu/:url" element={<StuHomepage />} />
          <Route path="/fac/:url" element={<FacDashboard />} />

          <Route path="*" element={<LoginForm />} />
        </Routes>
      </>
    )
  };
}

export default App;
