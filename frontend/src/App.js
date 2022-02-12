
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {  Suspense } from "react";
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
