import React from "react";
import Navbar from "../pages/navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">
        If you have any questions or would like to get in touch, please contact us at:
      </p>
      <p className="mt-2 text-lg">
        Email: contact@audiodiary.com
      </p>
      <p className="mt-2 text-lg">
        Phone: (123) 456-7890
      </p>
    </div>
    </div>
  );
};

export default Contact;