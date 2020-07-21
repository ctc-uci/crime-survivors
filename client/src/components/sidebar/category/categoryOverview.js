/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { pathify } from '../../../utils/commonUtils';
import './category.css';
// TODO: Use resourceId/CategoryId to jump to section and/or hide/collapse other categories

// eslint-disable-next-line object-curly-newline
function CategoryOverview({ selected, location }) {
  const [hide, setHide] = useState(true);
  return (
    <div>
      <button
        type="button"
        className={`sidebar-category ${selected ? 'purple' : ''}`}
        onClick={() => setHide(!hide)}
      >
        {`> ${'Overview'}`}
      </button>
      <div className="resource-group">
        {hide
          ? null
          : (
            <div className="sidebar-resource-container" key={uuidv4()}>
              <Link className="sidebar-resource" to={pathify([location])}>
                General Information
              </Link>
            </div>
          )}
      </div>
    </div>
  );
}

CategoryOverview.defaultProps = {
};

CategoryOverview.propTypes = {
};

export default CategoryOverview;
