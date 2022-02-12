
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {  Suspense } from "react";
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import LoginBus from './pages/LoginBus';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import LoginUser from './pages/LoginUser';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login/user" element={<LoginUser />} />
          <Route path="/login/business" element={<LoginBus />} />
        </Routes>
    </Router>
  );
}

export default App;
