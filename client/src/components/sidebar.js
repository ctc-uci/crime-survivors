import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { generatePath } from '../utils/commonUtils';

const Sidebar = ({ props }) => {
  // TODO: Use resourceId/CategoryId to jump to section and/or hide/collapse other categories
  const { resourceId, categoryId } = props;
  const data = useStaticQuery(
    graphql`
        query {
          allOrangeCountyYaml(filter: {title: {ne: null}}) {
            group(field: category) {
              fieldValue
              nodes {
                title
                id
              }
            }
          }
        }
      `,
  );

  return (
    <div>
      <h5>
        {resourceId}
        {' '}
        {categoryId}
      </h5>
      {data.allOrangeCountyYaml.group.map((category) => (
        <div key={uuidv4()}>
          <h2><Link to={generatePath(category.fieldValue, '')}>{category.fieldValue}</Link></h2>
          {category.nodes.map((node) => (
            <div key={uuidv4()}>
              <Link to={generatePath(category.fieldValue, node.title)}>{node.title}</Link>
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
    resourceId: 'resourceId',
    categoryId: 'categoryId',
  },
  resourceId: 'resourceId',
  categoryId: 'categoryId',
};

Sidebar.propTypes = {
  props: {
    resourceId: PropTypes.string,
    categoryId: PropTypes.string,
  },
  resourceId: PropTypes.string,
  categoryId: PropTypes.string,
};

export default Sidebar;
