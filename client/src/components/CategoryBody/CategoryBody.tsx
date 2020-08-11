import React from 'react';
import PropTypes from 'prop-types';
import { Resources, defaultResourceProp } from './Resource/Resource';
import { CategoryPropType, ResourcePropType } from './interfaces';

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

const Category: React.FC<CategoryPropType> = ({ location, category }) => (
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
Category.defaultProps = {
  location: 'LOCATION',
  category: 'CATEGORY',
};

const CategoryBody: React.FC<{resources: ResourcePropType[]}> = (
  { resources }
) => {
  const { location, category } = resources[0];
  return (
    <div>
      <Category location={location} category={category} />
      <Resources resources={resources} />
    </div>
  );
};
CategoryBody.defaultProps = {
  resources: [defaultResourceProp],
};

export default CategoryBody;
