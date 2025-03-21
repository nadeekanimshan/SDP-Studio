import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/AdminLogin.css";
import Navbar from "../pages/navbar";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        // Save the token to localStorage or state
        localStorage.setItem('token', data.token);
        // Navigate to the desired page after successful login
        navigate('/dashboard'); // Replace '/dashboard' with the actual path you want to navigate to
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h1 className="login-title">Admin Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <p className="worker-signup-tage" onClick={() => navigate('/admin-signup')}>
            Don't have an account? <span className="sign-text">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;