// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserList from './components/UserList';
import Signup from './components/Signup';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const handleLogout = () => {
    console.log('Logout clicked');
    toast.success('Directing to Logout page!');
  };

  const handleLogin = () => {
    console.log('Login clicked');
    toast.success('Directing to Login page!');
  };

  const handleSignup = () => {
    console.log('Signup clicked');
    toast.success('Directing to Signup page!');
  };

  const handleHome = () => {
    console.log('Home clicked');
    toast.success('Directing to Dashboard page!');
  };

  return (
  
      <div>
        <Header
          onLogout={handleLogout}
          onLogin={handleLogin}
          onHome={handleHome}
          onSignup={handleSignup}
        />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <ToastContainer />
      </div>
  
  );
};

export default App;
