/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */
import React from 'react';

import './navbar.css';
import logo from '../../images/cs-logo.png';

function resizeMainContainer() {
  // const currentMainWidth = document.querySelector('.main-container').offsetWidth;
  const screenWidth = document.querySelector('.escape-container').offsetWidth;
  const sidebarWidth = document.querySelector('.sidebar-container').offsetWidth;

  const mainContainerWidth = screenWidth - sidebarWidth;
  const w = `${mainContainerWidth.toString()}px`;
  document.querySelector('.main-container').style.width = w;
  // const mainContainerWidth = screenWidth - sidebarWidth;
  // const w = `${mainContainerWidth.toString()}px`;
  // document.querySelector('.main-container').style.width = w;
}

window.addEventListener('resize', resizeMainContainer);

const Navbar = () => (
  <div className="nav-bar" id="nav-bar" onLoad="resizeMainContainer()">
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

export default Navbar;
