import React from 'react';
import PropTypes from 'prop-types';
import { Resources, resourcePropType, defaultResourceProp } from './Resource/Resource';

import './CategoryBody.css';

const guideDisplay = {
  'Los Angeles County': 'LA County',
  'Orange County': 'OC',
  'Riverside County': 'Riverside County',
  'San Bernandino': 'San Bernandino',
  'San Diego': 'SD',
  'Los Angeles': 'LA',
  'Ventura County': 'Ventura County',
};

const Category = ({ location, category }) => (
  <div className="category">
    <p id="location">
      {guideDisplay[location]}
      {' '}
      Guide
      {' '}
    </p>
    <p id="category">{category}</p>
  </div>
);
Category.propTypes = {
  location: PropTypes.string,
  category: PropTypes.string,
};
Category.defaultProps = {
  location: 'LOCATION',
  category: 'CATEGORY',
};

const CategoryBody = ({ resources }) => {
  const { location, category } = resources[0];
  return (
    <div>
      <Category location={location} category={category} />
      <Resources resources={resources} location={location} category={category} />
    </div>
  );
};
CategoryBody.propTypes = {
  resources: PropTypes.arrayOf(resourcePropType),
};
CategoryBody.defaultProps = {
  resources: [defaultResourceProp],
};

export default CategoryBody;
