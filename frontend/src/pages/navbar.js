import React from "react";
import { NavLink } from 'react-router-dom'; // Using NavLink to highlight active page
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; // Adjust the path to your actual logo file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex items-center">
      <NavLink className="navbar-brand">
          <img src={logo} alt="Ryak Tires Logo" style={{ height: '95px' }} />
        </NavLink>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" activeClassName="active">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
        <button className="login-btn">Login</button>
      </ul>
    </nav>
  );
};

export default Navbar;