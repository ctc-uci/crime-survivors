import React from 'react';
import PropTypes from 'prop-types';
import './category.css';

const categoryTypes = {
  category: PropTypes.string,
};
const categoryDefault = 'CATEGORY';

const Category = ({ category }) => (
  <div className="category">
    {category}
    {/* Need  to add links to category */}
  </div>
);
Category.propTypes = categoryTypes;
Category.defaultProps = categoryDefault;

const Categories = ({ categories }) => (
  <div>
    <div className="category-header">
      Categories
    </div>
    <div className="category-container">
      {categories.sort().map((category) => <Category category={category} />)}
    </div>
  </div>
);
Categories.propTypes = {
  categories: PropTypes.arrayOf(categoryTypes),
};
Categories.defaultProps = {
  categories: [categoryDefault],
};

export {
  Categories,
  categoryTypes,
  categoryDefault,
};
