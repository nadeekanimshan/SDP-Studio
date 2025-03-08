import React from "react";
import Navbar from "../pages/navbar";

const About = () => {
  return (
    <div>
      <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg">
        Welcome to Audio Diary. We are dedicated to helping you begin your music journey.
        Our team of experts provides top-notch vocal training, artist development, and recording services.
      </p>
    </div>
    </div>
  );
};

export default About;