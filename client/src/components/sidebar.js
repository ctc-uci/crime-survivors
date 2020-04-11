import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';


const Sidebar = ({ props }) => {
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
          <h2>{category.fieldValue}</h2>
          {category.nodes.map((node) => (
            <div key={uuidv4()}>
              <p>{node.title}</p>
            </div>
          ))}
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
