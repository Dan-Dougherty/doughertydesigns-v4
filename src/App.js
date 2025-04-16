import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';  // Added import for HelmetProvider

import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ButchersUnion from './components/ButchersUnion';
import PortfolioCaseStudy from './components/PortfolioCaseStudy';
import AboutMe from './components/AboutMe'; 
import AllInTogether from './components/AllInTogether'; 
import IIDPCaseStudy from './components/IIDPCaseStudy';
import ScrollToTop from './ScrollToTop';
import Intro from './components/Intro';  // Import the loading screen

function App() {
  const [loading, setLoading] = useState(true);  // Manage loading state
  const [isLargeScreen, setIsLargeScreen] = useState(true); // Manage screen size state

  useEffect(() => {
    // Function to check if the screen is large (above 1024px)
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Initial screen size check
    handleResize();

    // Add an event listener to handle window resizing
    window.addEventListener('resize', handleResize);

    // Simulate loading period if it's a large screen
    if (isLargeScreen) {
      const timer = setTimeout(() => {
        setLoading(false);  // Set loading to false after 3 seconds for large screens
      }, 3000);

      return () => clearTimeout(timer);  // Cleanup the timer
    } else {
      setLoading(false); // Skip intro for smaller screens
    }

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, [isLargeScreen]);

  return (
    <HelmetProvider>  {/* Wrapped the entire app with HelmetProvider */}
      <Router>
        <ScrollToTop />
        {loading && isLargeScreen ? (
          <Intro />  // Show the intro screen only on large screens
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <AppContent />
          </Suspense>
        )}
      </Router>
    </HelmetProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const hideSidebarRoutes = [
    '/about',
    '/case-studies/butchers-union',
    '/case-studies/portfolio-website',
    '/case-studies/allintogether',
    '/case-studies/iidp' // <-- Add the new case study route here
  ];

  const isSidebarVisible = !hideSidebarRoutes.includes(location.pathname);

  return (
    <div className={`app ${isSidebarVisible ? '' : 'full-width'}`}>
      {isSidebarVisible ? (
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/case-studies/butchers-union" element={<ButchersUnion />} />
          <Route path="/case-studies/portfolio-website" element={<PortfolioCaseStudy />} />
          <Route path="/case-studies/allintogether" element={<AllInTogether />} />
          <Route path="/case-studies/iidp" element={<IIDPCaseStudy />} /> {/* New route */}
        </Routes>
      )}
    </div>
  );
}

export default App;
