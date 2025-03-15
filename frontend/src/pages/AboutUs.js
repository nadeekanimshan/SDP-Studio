import React from "react";
import Navbar from "../pages/navbar"; // Ensure this path is correct
import "../styles/AboutUs.css"; // Updated to CSS

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="background"> 
        <div className="container mx-auto p-6">
          <h1>About Us</h1>
          
          <p>
          At Audio Diary Studio, we believe that every voice is unique and every sound tells a story. Our carefully designed classes cater to aspiring singers, musicians, and producers, helping them refine their skills and achieve their artistic dreams.          </p>
        </div>
      </div>
      <div className="lecture-panel">
        <h2>Our Lecture Panel</h2>
        <div className="lecture-container">
          <div className="lecture-card">
            <div className="lecture-image"></div>
            <h3>Name 1</h3>
            <p>Description</p>
          </div>
          <div className="lecture-card">
            <div className="lecture-image"></div>
            <h3>Name 2</h3>
            <p>Description</p>
          </div>
          <div className="lecture-card">
            <div className="lecture-image"></div>
            <h3>Name 3</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <img src="/assets/logo.png" alt="Audio Diary" className="footer-logo" />
          <p>Audio Diary</p>
        </div>
      </footer>
    </div>
  );
};

export default About;