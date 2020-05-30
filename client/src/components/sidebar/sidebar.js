import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Category from './category/category';
import './sidebar.css';

const Sidebar = ({ props }) => {
  // TODO: Use resourceId/CategoryId to jump to section and/or hide/collapse other categories
  // eslint-disable-next-line react/prop-types

  const [sidebarOpen, setSidebarState] = useState(true);
  const { sidebarData } = props;

  // if(fullScreenSidebar) {
  //   style = {
  //     sidebar : {

  //     },
  //     'main-container' : {
  //       display: none
  //     }

  //   }
  // }

  return (
    <div className="sidebar-container">
      <button type="button" className="sidebar-button" onClick={() => { setSidebarState(!sidebarOpen); }}>OPEN SIDEBAR</button>
      <div className={`sidebar${sidebarOpen ? '' : ' hidden'}`}>
        <h1>Title</h1>
        <button type="button" onClick={() => { setSidebarState(!sidebarOpen); }}>hide</button>
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
