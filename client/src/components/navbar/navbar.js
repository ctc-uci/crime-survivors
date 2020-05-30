/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';

import './navbar.css';
import logo from '../../images/cs-logo.png';

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
