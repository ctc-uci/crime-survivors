import React from 'react';
import PropTypes from 'prop-types';
import './CountyPage.css';

const renderCategory = (category) => (
  <div>{category}</div>
  // Would need a link in order to navigate to categoryPage
  // <a href="https://.../{category}">{category}</a>
  // See Link from gatsby(supposedly faster)
  // See generating path with src/util/commonutil
);

const Categories = ({ categories }) => (
  <div>
    {' '}
    {categories.map(({ category }) => renderCategory(category))}
    {' '}
  </div>
);
Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({ category: PropTypes.string }),
  ),
};
Categories.defaultProps = {
  categories: [
    { category: 'hello' },
  ],
};

const CountyPage = ({ location, categories }) => (
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
      <div>
        {location}
        <Categories categories={categories} />
      </div>
    </div>
  </div>
);
CountyPage.propTypes = {
  location: PropTypes.string,
  categories: PropTypes.arrayOf({
    category: PropTypes.string,
  }),
};
CountyPage.defaultProps = {
  location: 'LOCATION',
  categories: [
    { category: 'hello' },
  ],
};

export default CountyPage;
