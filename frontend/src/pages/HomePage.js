import React from "react";
import Navbar from "../pages/navbar";
import "../styles/HomePage.css";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold">Welcome to Audio Diary</h1>
        {/* Background Image with Text */}
        <div className="background">
          <div className="text-center bg-black bg-opacity-50 p-6 rounded-lg">
            <h1 className="text-4xl font-bold">BEGIN YOUR MUSIC JOURNEY</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;