import React from 'react';
import PropTypes from 'prop-types';
import './CountyPage.css';

import EscapeButton from '../escape/escapeButton';
import Navbar from '../header/Navbar';
import Sidebar from '../sidebar/sidebar';
import { Categories, categoryTypes, categoryDefault } from './Category/category';
// import { Quotes, quotesTypes, quotesDefault } from './Quotes/Quotes'

import pinkwave1 from './images/pink-wave-1.svg';
import pinkwave2 from './images/pink-wave-2.svg';
import pinkwave3 from './images/pink-wave-3.svg';
import pinkwave4 from './images/pink-wave-4.svg';
import pinkwave5 from './images/pink-wave-5.svg';
import pinkwave6 from './images/pink-wave-6.svg';

const countyPageTypes = {
  location: PropTypes.string,
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      category: categoryTypes.category,
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  /*
  quotes: quotesTypes
  */
};
const countyPageDefault = {
  location: 'LOCATION',
  resources: [
    {
      category: categoryDefault,
      title: 'TITLE',
      id: 'ID',
    },
  ],
  // quotes: quotesDefault
};

const Location = ({ location }) => (
  <div className="location">
    {location}
    {' '}
    Guide
  </div>
);
Location.propTypes = countyPageTypes.location;
Location.defaultProps = countyPageDefault.location;


function filterDups(resources) {
  const categorySet = new Set();
  resources.forEach(({ category }) => categorySet.add(category));
  return [...categorySet];
}

// Think all these transforms are required to fit PropTypes in sidebar
function truncateForSidebar(resources) {
  const truncate = (resource) => ({
    title: resource.title,
    id: resource.id,
  });
  return resources.map((resource) => truncate(resource));
}

/*
  Returns an array of objects:
  {
    category
    resources [{
      title
      id
    }]
  }
  such that
    - category is a unique category name
    - resources is a list of resources associated with that category
*/
function formSidebarData(resources) {
  const categoryGroups = {};
  resources.forEach(({ category, title, id }) => {
    if (!(category in categoryGroups)) {
      categoryGroups[category] = [];
    }
    // if (title != null) {
    categoryGroups[category].push({
      title,
      id,
    });
    // }
  });
  const sidebarData = [];
  Object.keys(categoryGroups).forEach((category) => {
    sidebarData.push({
      category,
      resources: truncateForSidebar(categoryGroups[category]),
    });
  });
  return { group: sidebarData };
}

const CountyPage = ({ location, resources }) => {
  const categories = filterDups(resources);
  const sidebarData = formSidebarData(resources);

  return (
    <div className="page">
      <EscapeButton />
      <div className="lateral">
        <div>
          <Sidebar
            props={{ sidebarData }}
          />
        </div>
        <div className="content">
          <Navbar />
          <Location location={location} />
          <Categories categories={categories} />
          {/* <Quotes quotes={quotes}/> */}
          {/*
            Each duo is laid on top of one another,
            check figma for possible positioning
          */}
          <img src={pinkwave1} alt="" />
          <img src={pinkwave2} alt="" />
          <img src={pinkwave3} alt="" />
          <img src={pinkwave4} alt="" />
          <img src={pinkwave5} alt="" />
          <img src={pinkwave6} alt="" />
        </div>
      </div>
    </div>
  );
};
CountyPage.propTypes = countyPageTypes;
CountyPage.defaultProps = countyPageDefault;

export default CountyPage;
