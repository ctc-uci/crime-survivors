/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Category from './category/category';
import './sidebar.css';

const Sidebar = ({ props }) => {
  // TODO: Use resourceId/CategoryId to jump to section and/or hide/collapse other categories

  const [sidebarOpen, setSidebarState] = useState(true);
  const { sidebarData } = props;

  let main;
  let sidebarContainer;
  let sidebar;
  let mobile;

  function check() {
    if (sidebarOpen) {
      // console.log(mobile);
      // console.log(document.querySelector('.escape-container').offsetWidth);
      if (mobile) {
        sidebar.style.display = 'block';
        sidebar.style.width = '100%';
        sidebarContainer.style.width = '100%';
        main.style.display = 'none';
      } else {
        // main.style.display = 'block';
        sidebar.style.display = 'block';
        sidebar.style.width = '272';
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


  function resizeWindow() {
    main = document.querySelector('.main-container');
    sidebarContainer = document.querySelector('.sidebar-container');
    sidebar = document.querySelector('.sidebar');
    mobile = document.querySelector('.escape-container').offsetWidth <= 600;

    check();
  }


  useEffect(() => {
    main = document.querySelector('.main-container');
    sidebarContainer = document.querySelector('.sidebar-container');
    sidebar = document.querySelector('.sidebar');
    mobile = document.querySelector('.escape-container').offsetWidth <= 600;
    window.addEventListener('resize', resizeWindow);

    check();
  });


  return (
    <div className="sidebar-container">
      <button type="button" className="sidebar-button" onClick={() => { setSidebarState(true); }}>OPEN SIDEBAR</button>
      <div className="sidebar">
        <h1>Title</h1>
        <button type="button" onClick={() => { setSidebarState(false); }}>hide</button>
        {sidebarData.group.map((category) => (
          <div key={uuidv4()}>
            {/* <p>
            {`${selectedCategory}asda`}
            {category.categoryId}
          </p> */}

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
