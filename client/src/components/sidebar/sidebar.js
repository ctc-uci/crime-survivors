import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Category from './category/category';
import './sidebar.css';

const Sidebar = ({ props }) => {
  // TODO: Use resourceId/CategoryId to jump to section and/or hide/collapse other categories
  const { sidebarData } = props;

  return (
    <div className="sidebar">
      <h1>Title</h1>
      {sidebarData.group.map((category) => (
        <div key={uuidv4()}>
          <Category categoryName={category.category} resources={category.resources} />
        </div>
      ))}
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
