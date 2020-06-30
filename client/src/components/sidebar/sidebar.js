/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = ({ content }) => {
  const [sidebarOpen, setSidebarState] = useState(true);

  function resizeWindow() {
    const main = document.querySelector('.main-container');
    const sidebarContainer = document.querySelector('.sidebar-container');
    const sidebar = document.querySelector('.sidebar');
    const mobile = document.querySelector('.escape-container').offsetWidth <= 600;

    if (sidebarOpen) {
      if (mobile) {
        sidebar.style.display = 'block';
        sidebar.style.width = '100%';
        sidebarContainer.style.width = '100%';
        main.style.display = 'none';
      } else {
        sidebar.style.display = 'block';
        sidebar.style.width = '272px';
        sidebarContainer.style.width = 'initial';
        main.style.display = 'block';
        const mainHeight = main.offsetHeight;
        sidebar.style.maxHeight = `${mainHeight}px`;
      }
    } else {
      sidebar.style.display = 'none';
      sidebarContainer.style.width = '0%';
      main.style.display = 'block';
      main.style.width = '100%';
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    resizeWindow();
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  });

  return (
    <div className="sidebar-container">
      <button type="button" className={`link-button sidebar-button${sidebarOpen ? ' hidden' : ''}`} onClick={() => { setSidebarState(true); }}>
        <IconContext.Provider value={{ color: 'black', size: '3em' }}>
          <div>
            <FaBars />
          </div>
        </IconContext.Provider>
      </button>
      <div className="sidebar">
        <h1>Title</h1>
        <button type="button" className="link-button" onClick={() => { setSidebarState(false); }}>
          <IconContext.Provider value={{ color: 'white', size: '2em' }}>
            <div>
              <FaBars />
            </div>
          </IconContext.Provider>

        </button>

        {/* Render sidebar content */}
        {content}
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  content: null,
};

Sidebar.propTypes = {
  content: PropTypes.element,
};

export default Sidebar;
