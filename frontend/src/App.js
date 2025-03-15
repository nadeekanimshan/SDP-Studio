import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import BrowserRouter
import HomePage from './pages/HomePage';
import BookingsPage from './pages/BookingsPage';
import ClassesPage from './pages/ClassesPage';
import ArtistsPage from './pages/ArtistsPage';
import About from './pages/AboutUs';  
import Services from './pages/Services';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import StartPage from './pages/StartPage';

const App = () => {
  return (
    <Router> 

        <Routes> {/* Wrap all Routes inside Router */}
          <Route path="/" element={<HomePage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/start-page" element={<StartPage />} />
          
        </Routes>
     
    </Router> 
  );
};

export default App;
