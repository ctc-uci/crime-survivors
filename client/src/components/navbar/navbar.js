/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
// import React from 'react';
// import { Link } from 'gatsby';

import './navbar.css';
import logo from '../../images/cs-logo.png';

function resizeMainContainer() {
  const screenWidth = document.querySelector('.escape-container').offsetWidth;
  const sidebarWidth = document.querySelector('.sidebar-container').offsetWidth;

  const mainContainerWidth = screenWidth - sidebarWidth;
  const w = `${mainContainerWidth.toString()}px`;
  document.querySelector('.main-container').style.width = w;
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
  {/* <div className="nav-bar" id="nav-bar"> */}
    {/* links are nothing for now */}
    <div className="logo">
      <a className="cs-logo-img" href="\">
        <img src={logo} alt="Logo" />
      </a>
    </div>
    <ul className="navigation">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Find Your County</a>
      </li>
      <li>
        <a href="/">General Guides</a>
      </li>
      <li>
        <a href="/">Contact Us</a>
      </li>
    </ul>
  </div>
  );
};

export default Navbar;
