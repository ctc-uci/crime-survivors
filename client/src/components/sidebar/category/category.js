/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { pathify, whiteSpaceToDash } from '../../../utils/commonUtils';
import './category.css';

// eslint-disable-next-line object-curly-newline
function Category({ categoryName, resources, location, url }) {
  const resourceTitle = url.hash.substr(1); // remove '#' symbol

  function isCurrentPage() {
    if (!resourceTitle) { // no anchor tag
      return true;
    }

    return !(resources.filter((obj) => whiteSpaceToDash(obj.title) === resourceTitle).length);
  }

  const [hide, setHide] = useState(isCurrentPage);

  return (
    <div>
      <button
        type="button"
        className="sidebar-category"
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
                <Link className={`sidebar-resource ${whiteSpaceToDash(resource.title) === resourceTitle ? 'blue' : ''}`} to={pathify([location, categoryName], resource.title)}>
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
  url: {},
};

Category.propTypes = {
  categoryName: PropTypes.string,
  resources: PropTypes.arrayOf({
    title: PropTypes.string,
    id: PropTypes.string,
  }),
  url: PropTypes.shape({
    hash: PropTypes.string,
    host: PropTypes.string,
    hostname: PropTypes.string,
    href: PropTypes.string,
    key: PropTypes.string,
    origin: PropTypes.string,
    pathname: PropTypes.string,
    port: PropTypes.string,
    protocol: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.string,
  }),
};

export default Category;
