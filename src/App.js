import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './HomeContent';
import Html from './htmlContent'; 
import Css from './CSSContent'; 
import Cpp from './cpp'; 
import Python from './python'; 
import ContactForm from './ContactForm'; 
import Login from './Login'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleLogin = async (username, password) => {
    // Replace with your actual authentication logic
    if (username === 'employee' && password === 'password') {
      const user = { role: 'employee' }; // Set user role after successful login
      localStorage.setItem('user', JSON.stringify(user));
      setIsAuthenticated(true);
      await fetchEmployees(); // Fetch employees upon login
    } else {
      throw new Error('Invalid credentials. Please try again.');
    }
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/cpp" element={<Cpp />} />
        <Route path="/python" element={<Python />} />
        
        {/* Protect the ContactForm route */}
        <Route 
          path="/form" 
          element={isAuthenticated ? <ContactForm employees={employees} /> : <Navigate to="/login" />} 
        />
        
        {/* Login route */}
        <Route 
          path="/login" 
          element={<Login onLogin={handleLogin} />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
