import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import UserTable from './pages/UsersTable';
import FAQ from './pages/FAQ';
import ManageTeam from './pages/ManageTeam';
import DashBoard from './pages/dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/app" element={<App />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/profile/:username" element={<DashBoard />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/usertable" element={<UserTable />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/manageteam" element={<ManageTeam />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);