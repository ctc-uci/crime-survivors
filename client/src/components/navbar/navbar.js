/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */
// import React, { useEffect, useState } from 'react';
import React from 'react';
// import { Link } from 'gatsby';

import './navbar.css';
import logo from '../../images/cs-logo.png';


// // Hook
// function useWindowSize() {
//   // const isClient = typeof window === 'object';

//   function getSize() {
//     return {
//       width: window.innerHeight,
//       height: window.innerHeight,
//     };
//   }

//   const [windowSize, setWindowSize] = useState(getSize);

//   useEffect(() => {
//     // if (!isClient) {
//     //   return false;
//     // }

//     function handleResize() {
//       setWindowSize(getSize());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []); // Empty array ensures that effect is only run on mount and unmount

//   return windowSize;
// }

// function getWidth() {
//   const windowWidth = useWindowSize().width;
//   const sidebarWidth = document.querySelector('.sidebar').offsetWidth; +20;
//   const navWidth = windowWidth - sidebarWidth;
//   return navWidth;
// }

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
