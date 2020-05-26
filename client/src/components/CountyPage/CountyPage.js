import React from 'react';
import PropTypes from 'prop-types';
import './CountyPage.css';

import EscapeButton from '../escape/escapeButton';
import Navbar from '../header/Navbar';
import Sidebar from '../sidebar/sidebar';
import { Categories, categoryTypes, categoryDefault } from './Category/category';
// import { Quotes, quotesTypes, quotesDefault } from './Quotes/Quotes'

import wave1 from './images/pink-wave-1.svg';
import wave2 from './images/pink-wave-2.svg';
import wave3 from './images/blue-wave-1.svg';
import wave4 from './images/blue-wave-2.svg';
import wave5 from './images/purple-wave-1.svg';
import wave6 from './images/purple-wave-2.svg';

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
    categoryGroups[category].push({
      title,
      id,
    });
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
          {/* Div is required around sidebar for current width */}
          <Sidebar props={{ sidebarData }} />
        </div>
        <div className="display">
          <div className="nav-info">
            <Navbar />
            <Location location={location} />
          </div>
          <div className="content">
            <img src={wave1} id="wave1" alt="" />
            <img src={wave2} id="wave2" alt="" />
            <img src={wave3} id="wave3" alt="" />
            <img src={wave4} id="wave4" alt="" />
            <img src={wave5} id="wave5" alt="" />
            <img src={wave6} id="wave6" alt="" />
            <Categories categories={categories} />
            {/* <Quotes quotes={quotes}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};
CountyPage.propTypes = countyPageTypes;
CountyPage.defaultProps = countyPageDefault;

export default CountyPage;
