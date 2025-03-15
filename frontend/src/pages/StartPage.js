import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/StartPage.css";
import logo from '../assets/logo.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar-start">
        <img src={logo} alt="Logo" />
        <div className="navbar-content">
          <h1>AUDIO DIARY</h1>
        </div>
      </nav>
      <div className="background-start-page">
        <div className="strat-bottons">
          <button className="class" onClick={() => navigate('/')}>VOCAL TRAINING CLASSES</button>
          <button className="artist" onClick={() => navigate('/artist')}>ARTIST</button>
          <button className="recording" onClick={() => navigate('/recording')}>RECORDING APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;