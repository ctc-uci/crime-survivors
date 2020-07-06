import React from 'react';
import PropTypes from 'prop-types';
import { Resources, resourcePropType, defaultResourceProp } from './Resource/Resource';

import './CategoryPage.css';

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

const CategoryPage = ({ resources }) => {
  const { location, category } = resources[0];
  return (
    <div>
      <Category location={location} category={category} />
      <Resources resources={resources} location={location} category={category} />
    </div>
  );
};
CategoryPage.propTypes = {
  resources: PropTypes.arrayOf(resourcePropType),
};
CategoryPage.defaultProps = {
  resources: [defaultResourceProp],
};

export default CategoryPage;
