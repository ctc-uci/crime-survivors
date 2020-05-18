import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './CountyPage.css';

const countyPagePropTypes = {
  location: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({ category: PropTypes.string }),
  ),
};
const defaultCountyPageProps = {
  location: 'LOCATION',
  categories: [
    { category: 'hello' },
  ],
};

const Location = (location) => (
  <div className="location">{location}</div>
);

const Category = (category) => (
  <div
    key={uuidv4()}
    className="category"
  >
    {category}
  </div>
  // Would need a link in order to navigate to categoryPage
  // <a href="https://.../{category}">{category}</a>
  // See Link from gatsby(supposedly faster)
  // See generating path with src/util/commonutil
);

const Categories = (categories) => (
  <div>
    {categories.map((category) => Category(category))}
  </div>
);

const filterDupCategories = (categories) => {
  const categorySet = new Set();
  categories.forEach(({ category }) => categorySet.add(category));
  return [...categorySet];
};

const CountyPage = ({ location, categories }) => {
  const uniqCategories = filterDupCategories(categories);
  return (
    <div className="page">
      <div>
        {/* <Header/> */}
        Placeholder for Header
      </div>
      <div className="lateral">
        <div>
          {/* <Sidebar/>, check version_pool for sidebar component */}
          Placeholder for Sidebar
        </div>
        <div className="content">
          {Location(location)}
          {Categories(uniqCategories)}
        </div>
      </div>
    </div>
  );
};
CountyPage.propTypes = countyPagePropTypes;
CountyPage.defaultProps = defaultCountyPageProps;

export default CountyPage;
