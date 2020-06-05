/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import './navbar.css';
import logo from '../../images/CrimeSurvivorsLogo.png';

function resizeMainContainer() {
  const screenWidth = document.querySelector('.escape-container').offsetWidth;
  const sidebar = document.querySelector('.sidebar-container');
  const sidebarWidth = sidebar == null ? 0 : sidebar.offsetWidth;

  const navbarWidth = screenWidth - sidebarWidth;
  const w = `${navbarWidth.toString()}px`;
  if (document.querySelector('.main-container') != null) {
    document.querySelector('.main-container').style.width = w;
  } else {
    document.querySelector('.nav-bar').style.width = w;
  }
}

const Navbar = () => {
  useEffect(() => {
    window.addEventListener('resize', resizeMainContainer);
    // Resized
    return () => {
      // Clean Up
      window.removeEventListener('resize', resizeMainContainer);
    };
  }, []);
  return (
  <div className="nav-bar" id="nav-bar">
    <div className="logo">
      <Link className="cs-logo-img" to="/LandingPage">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
    <ul className="navigation">
      <li>
        <Link to="/LandingPage">Home</Link>
      </li>
      <li>
      <Link to="/LandingPage#county-section">Find Your County</Link>
      </li>
      <li>
      <Link to="/">General Guides</Link>
      </li>
      <li>
        <a href="https://crimesurvivors.org/contact-us/" target="_blank" rel="noopener noreferrer">Contact Us</a>
      </li>
    </ul>
  </div>
  );
};

export default Navbar;
