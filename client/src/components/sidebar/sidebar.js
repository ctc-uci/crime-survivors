/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';
import Category from './category/category';
import './sidebar.css';

const Sidebar = ({ props }) => {
  const [sidebarOpen, setSidebarState] = useState(true);
  const { sidebarData } = props;

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
          <IconContext.Provider value={{ color: 'white', size: '3em' }}>
            <div>
              <FaBars />
            </div>
          </IconContext.Provider>

        </button>

        {sidebarData.group.map((category) => (
          <div key={uuidv4()}>
            <Category
              categoryName={category.category}
              resources={category.resources}
              selected={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  props: {
    sidebarData: {
      group: [
        {
          category: 'fieldValue',
          resources: [
            {
              title: 'title',
              id: 'id',
            },
          ],
        },
      ],
    },
    resourceId: 'resourceId',
    categoryId: 'categoryId',
  },
  sidebarData: {
    group: [
      {
        category: 'fieldValue',
        resources: [
          {
            title: 'title',
            id: 'id',
          },
        ],
      },
    ],
  },
};

Sidebar.propTypes = {
  props: {
    sidebarData: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          category: PropTypes.string,
          resources: PropTypes.arrayOf({
            title: PropTypes.string,
            id: PropTypes.string,
          }),
        }),
      ),
    }),
    resourceId: PropTypes.string,
    categoryId: PropTypes.string,
  },
  sidebarData: PropTypes.shape({
    group: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string,
        resources: PropTypes.arrayOf({
          title: PropTypes.string,
          id: PropTypes.string,
        }),
      }),
    ),
  }),
};

export default Sidebar;
