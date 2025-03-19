import React from "react";
import { NavLink } from 'react-router-dom'; // Import NavLink
import Navbar from "../pages/navbar";
import "../styles/AboutUs.css";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="background"> 

        <div className="container">
          <h1>Service</h1>
          <p>Welcome to our website. We are dedicated to providing the best service for our customers.</p>
          
        </div>
        
      </div>
      <button className="btncalender">
          <NavLink to="/calender">Calendar</NavLink>
        </button>
    </div>
  );
};

export default Services;