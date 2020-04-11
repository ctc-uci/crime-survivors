import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { generatePath } from '../utils/commonUtils';

const Sidebar = ({ props }) => {
  // TODO: Use resourceId/CategoryId to jump to section and/or hide/collapse other categories
  const { sidebarData, resourceId, categoryId } = props;

  return (
    <div>
      <h5>
        {resourceId}
        {' '}
        {categoryId}
      </h5>
      {sidebarData.group.map((category) => (
        <div key={uuidv4()}>
          <h2><Link to={generatePath(category.category, '')}>{category.category}</Link></h2>
          {category.resources.map((resource) => (
            <div key={uuidv4()}>
              <Link to={generatePath(category.category, resource.title)}>{resource.title}</Link>
            </div>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
};

Sidebar.defaultProps = {
  props: {
    sidebarData: {
      group: [{
        category: 'fieldValue',
        resources: [
          {
            title: 'title',
            id: 'id',
          },
        ],
      }],
    },
    resourceId: 'resourceId',
    categoryId: 'categoryId',
  },
  sidebarData: {
    group: [{
      category: 'fieldValue',
      resources: [
        {
          title: 'title',
          id: 'id',
        },
      ],
    }],
  },
  resourceId: 'resourceId',
  categoryId: 'categoryId',
};

Sidebar.propTypes = {
  props: {
    sidebarData: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          category: PropTypes.string,
          resources: PropTypes.arrayOf(
            {
              title: PropTypes.string,
              id: PropTypes.string,
            },
          ),
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
        resources: PropTypes.arrayOf(
          {
            title: PropTypes.string,
            id: PropTypes.string,
          },
        ),
      }),
    ),
  }),
  resourceId: PropTypes.string,
  categoryId: PropTypes.string,
};

export default Sidebar;
