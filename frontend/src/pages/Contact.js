import React from "react";
import Navbar from "../pages/navbar";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="background-contact">
        <div className="container mx-auto p-6">
          <h1>Contact Us</h1>
          <p>If you have any questions, feel free to reach out to us.</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;