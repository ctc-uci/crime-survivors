/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { pathify } from '../../../utils/commonUtils';
import './category.css';
// TODO: Use resourceId/CategoryId to jump to section and/or hide/collapse other categories

// eslint-disable-next-line object-curly-newline
function Category({ categoryName, resources, selected, location }) {
  const [hide, setHide] = useState(true);
  return (
    <div>
      <button
        type="button"
        className={`sidebar-category ${selected ? 'purple' : ''}`}
        onClick={() => setHide(!hide)}
      >
        {`> ${categoryName}`}
      </button>
      <div className="resource-group">
        {hide
          ? null
          : resources.map((resource) => (
            <div className="sidebar-resource-container" key={uuidv4()}>
              {resource.title ? (
                <Link className="sidebar-resource" to={pathify([location, categoryName], resource.title)}>
                  {resource.title}
                </Link>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
}

Category.defaultProps = {
  categoryName: 'category',
  resources: [
    {
      title: 'title',
      id: 'id',
    },
  ],
};

Category.propTypes = {
  categoryName: PropTypes.string,
  resources: PropTypes.arrayOf({
    title: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default Category;
