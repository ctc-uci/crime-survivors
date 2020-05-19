import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Category from './category/category';
import './sidebar.css';

// TODO: Use resourceId/CategoryId to jump to section and/or hide/collapse other categories
const Sidebar = ({ sidebarData }) => (
  <div className="sidebar">
    <h1>Title</h1>
    {sidebarData.map(({ category, resources }) => (
      <div key={uuidv4()}>
        <Category categoryName={category} resources={resources} />
      </div>
    ))}
  </div>
);


Sidebar.defaultProps = {
  sidebarData: {
    category: 'fieldValue',
    resources: [
      {
        title: 'title',
        id: 'id',
      },
    ],
  },
  // resourceId: 'resourceId',
  // categoryId: 'categoryId',
};

Sidebar.propTypes = {
  sidebarData: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      resources: PropTypes.arrayOf({
        title: PropTypes.string,
        id: PropTypes.string,
      }),
    }),
  ),
  // resourceId: PropTypes.string,
  // categoryId: PropTypes.string,
};

export default Sidebar;
