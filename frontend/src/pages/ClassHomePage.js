import React from "react";
import Navbar from "../pages/navbar";
import "../styles/ClassHomePage.css";

const classHomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="background-home-page">  
        <div className="container mx-auto p-6">
          <h1>BEGIN YOUR MUSIC JOURNEY</h1>
        </div>
      </div>
    </div>
  );
};

export default classHomePage;