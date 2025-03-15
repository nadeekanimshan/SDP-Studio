import React from "react";
import Navbar from "../pages/navbar";
import "../styles/AboutUs.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="background"> 
        <div className="container ">
          <h1>service</h1>
          <p>Welcome to our website. We are dedicated to providing the best service for our customers.</p>
        </div>
      </div>
    </div>
  );
};

export default About;