import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import BrowserRouter
import HomePage from './pages/HomePage';
import BookingsPage from './pages/BookingsPage';
import ClassesPage from './pages/ClassesPage';
import ArtistsPage from './pages/ArtistsPage';
import About from './pages/AboutUs';  
import Services from './pages/Services';
import Contact from './pages/Contact';

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
        </Routes>
     
    </Router> 
  );
};

export default App;
