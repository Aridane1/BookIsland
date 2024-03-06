import React, { useState, useEffect } from 'react';
import logo from "../assets/Logos/Logo.svg";
import { Redirect } from 'react-router-dom';

const LandingPage = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigating to login page after 2 seconds
      setShowLandingPage(false);
    }, 2000);

    // stop the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLandingPage ? (
        <div className="flex justify-center items-center h-screen">
          <img src={logo} alt="Logo" />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default LandingPage;
