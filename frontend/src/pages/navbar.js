import React from "react";
import { NavLink } from 'react-router-dom'; // Using NavLink to highlight active page
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; // Adjust the path to your actual logo file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex items-center">
      <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo"/>
        </NavLink>
        
      </div>
      <ul className="nav-links">
        <ul className="nav-item">
          <NavLink to="/ClassHomePage" exact activeClassName="active">Home</NavLink>
        </ul>
        <ul className="nav-item">
          <NavLink to="/about" activeClassName="active">About us</NavLink>
        </ul>
        <ul className="nav-item">
          <NavLink to="/services" activeClassName="active">Services</NavLink>
        </ul>
        <ul className="nav-item">
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </ul>
        <button className="login-btn">
        <NavLink to="/admin-login" className="login-btn">Login</NavLink>
        </button>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;