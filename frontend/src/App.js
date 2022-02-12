
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {  Suspense } from "react";
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
  );
}

export default App;
