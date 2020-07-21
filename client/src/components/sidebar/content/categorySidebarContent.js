import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Category from '../category/category';
import CategoryOverview from '../category/categoryOverview';
import '../sidebar.css';

const CategorySidebarContent = ({ content, location }) => (
  <div>
    <div>
      <CategoryOverview
        selected={false}
        location={location}
      />
    </div>
    { content.group.map((category) => (
      <div key={uuidv4()}>
        <Category
          categoryName={category.category}
          resources={category.resources}
          selected={false}
          location={location}
        />
      </div>
    ))}
  </div>
);

CategorySidebarContent.defaultProps = {
  content: {
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
  location: 'location',
};

CategorySidebarContent.propTypes = {
  content: PropTypes.shape({
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
  location: PropTypes.string,
};

export default CategorySidebarContent;
