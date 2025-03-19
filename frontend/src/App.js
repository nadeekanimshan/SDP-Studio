import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import HomePage from './pages/ClassHomePage';
import ArtistsPage from './pages/ArtistsPage';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import StudentSignup from './pages/StudentSignup';
import RecordingHomePage from './pages/RecordingHomePage';
import GoogleCalendar from './pages/Calender'; // Import the GoogleCalendar component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/ClassHomePage" element={<HomePage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/recordingHomePage" element={<RecordingHomePage />} />
        <Route path="/calender" element={<GoogleCalendar />} /> {/* Add the route for GoogleCalendar */}
      </Routes>
    </Router>
  );
};

export default App;