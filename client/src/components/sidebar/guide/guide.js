import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { pathify } from '../../../utils/commonUtils';
import './guide.css';

function Guide({ guide }) {
  return (
    <div>
      <Link to={pathify(['..', guide.title])}>
        <button
          type="button"
          className="sidebar-guide"
        >
          {`> ${guide.title}`}
        </button>
      </Link>
    </div>
  );
}

Guide.defaultProps = {
  guide: {
    title: 'title',
  },
};

Guide.propTypes = {
  guide: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default Guide;
