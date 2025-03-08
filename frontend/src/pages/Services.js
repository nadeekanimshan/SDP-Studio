import React from "react";
import Navbar from "../pages/navbar";

const Services = () => {
  return (
    <div>
      <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">Our Services</h1>
      <ul className="mt-4 text-lg list-disc list-inside">
        <li>Vocal Training Classes</li>
        <li>Artist Development</li>
        <li>Recording Appointments</li>
      </ul>
    </div>
    </div>
  );
};

export default Services;