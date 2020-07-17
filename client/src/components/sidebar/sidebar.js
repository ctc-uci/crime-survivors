/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
    const sidebarItem = document.querySelector('.sidebar-item');
    const sidebarTitle = document.querySelector('.sidebar-title');
    const hamburgerIcon = document.querySelector('.link-button');

    if (sidebarOpen) {
      if (mobile) {
        sidebarItem.style.display = 'block';
        sidebarTitle.style.display = 'block';
        sidebar.style.display = 'block';
        sidebar.style.width = '100%';
        sidebarContainer.style.width = '100%';
        main.style.display = 'none';
      } else {
        sidebarContainer.style.width = 'initial';
        sidebarItem.style.display = 'block';
        sidebarTitle.style.display = 'block';
        sidebar.style.display = 'block';
        sidebar.style.width = '272px';
        main.style.display = 'block';
        const mainHeight = main.offsetHeight;
        sidebar.style.maxHeight = `${mainHeight}px`;
      }
    } else {
      hamburgerIcon.style.right = '1px';
      hamburgerIcon.style.top = '20px';
      sidebarContainer.style.width = 'initial';
      sidebar.style.width = '50px';
      sidebarItem.style.display = 'none';
      sidebarTitle.style.display = 'none';
      main.style.display = 'block';
      main.style.width = 'calc(100% - 50px)';
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
      <div
        className="sidebar"
        /* The sidebar has a click handler so that users dont need to rely on the small icon */
        onClick={() => {
          if (!sidebarOpen) {
            setSidebarState(!sidebarOpen);
          }
        }}
      >
        <h1 className="sidebar-title">Title</h1>
        <button type="button" className="link-button" onClick={() => { setSidebarState(!sidebarOpen); }}>
          <IconContext.Provider value={{ color: 'white', size: '2em' }}>
            <div>
              <FaBars />
            </div>
          </IconContext.Provider>
        </button>
        {/* Render sidebar content */}
        <div className="sidebar-item">
          {content}
        </div>
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
