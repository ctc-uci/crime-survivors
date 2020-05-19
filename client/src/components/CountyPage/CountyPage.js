import React from 'react';
import PropTypes from 'prop-types';
import './CountyPage.css';

import Sidebar from '../sidebar/sidebar';
// import { Quotes, quotesTypes, quotesDefault } from './Quotes/Quotes'

const countyPagePropTypes = {
  location: PropTypes.string,
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  /*
  quotes: quotesTypes
  */
};
const defaultCountyPageProps = {
  location: 'LOCATION',
  resources: [
    {
      category: 'CATEGORY',
      title: 'TITLE',
      id: 'ID',
    },
  ],
  // quotes: quotesDefault
};

const Location = (location) => (
  <div className="location">{location}</div>
);

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
      - only title and id
*/
function formSidebarData(resources) {
  const categoryGroups = {};
  resources.forEach(({ category, title, id }) => {
    if (!(category in categoryGroups)) {
      categoryGroups[category] = [];
    }
    // TO-DO: THIS NULL CHECK IS TEMPORARY -> This is a problem with data
    if (title != null) {
      categoryGroups[category].push({
        title,
        id,
      });
    }
  });
  const sidebarData = [];
  Object.keys(categoryGroups).forEach((category) => {
    sidebarData.push({
      category,
      resources: truncateForSidebar(categoryGroups[category]),
    });
  });
  return sidebarData;
}

const CountyPage = ({ location, resources }) => {
  const sidebarData = formSidebarData(resources);
  return (
    <div className="page">
      <div>
        {/* <Header/> */}
        Placeholder for Header
      </div>
      <div className="lateral">
        <div>
          <Sidebar
            sidebarData={sidebarData}
          />
        </div>
        <div className="content">
          {Location(location)}
          {/* <Quotes quotes={quotes}/> */}
        </div>
      </div>
    </div>
  );
};
CountyPage.propTypes = countyPagePropTypes;
CountyPage.defaultProps = defaultCountyPageProps;

export default CountyPage;
