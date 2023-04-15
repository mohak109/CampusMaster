// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import { Routes, Route } from "react-router-dom";
import StudDashboard from './components/student/StudDashboard';
import FacDashboard from './components/faculty/FacDashboard';
import AdmDashboard from './components/admin/AdmDashboard';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/studash" element={<StudDashboard />} />
          <Route path="/facdash" element={<FacDashboard />} />
          <Route path="/admdash" element={<AdmDashboard />} />
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </>

    )
  };
}

export default App;
