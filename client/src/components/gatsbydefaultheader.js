import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const GHeader = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

GHeader.propTypes = {
  siteTitle: PropTypes.string,
};

GHeader.defaultProps = {
  siteTitle: 'ASDF',
};

export default GHeader;
