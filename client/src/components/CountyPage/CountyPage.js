import React from 'react';
import PropTypes from 'prop-types';
import './CountyPage.css';
import { Quotes, quotesTypes, quotesDefault } from './Quotes/Quotes';
import city from './images/city.png';
import purple from './images/purple.svg';
import green1 from './images/green1.svg';
import green2 from './images/green2.svg';
import blue1 from './images/blue1.svg';
import blue2 from './images/blue2.svg';

const guideDisplay = {
  'Los Angeles County': 'LA County',
  'Orange County': 'OC',
  'Riverside County': 'Riverside County',
  'San Bernandino': 'San Bernandino',
  'San Diego': 'SD',
  'Los Angeles': 'LA',
  'Ventura County': 'Ventura County',
};

const countyPageTypes = {
  location: PropTypes.string,
  quotes: quotesTypes,
};
const countyPageDefault = {
  location: 'LOCATION',
  quotes: quotesDefault,
};

const LandingHeader = ({ location }) => (
  <div className="landing-header">
    <div>
      <div className="location">
        {guideDisplay[location]}
        {' '}
        Guide
        <br />
      </div>
      <div className="disclaimer">
        <br />
        These resources are specific to Crime Survivors
        that reside in
        {' '}
        {location}
        . The resources in this
        guide provide Crime Survivors with the necessary information
        to recover and find support in
        {' '}
        {location}
        .
      </div>
    </div>
    <div className="header-image">
      <img src={city} id="city" alt="city" />
      {/* <img src={cityBackColor} id="back" alt="back" /> */}
    </div>
  </div>
);
LandingHeader.propTypes = countyPageTypes.location;
LandingHeader.defaultProps = countyPageDefault.location;

const CountyPage = ({ location, quotes }) => (
  <div className="county-container">
    <LandingHeader location={location} />
    <img src={purple} id="purple" alt="" />
    <img src={green1} id="green1" alt="" />
    <img src={green2} id="green2" alt="" />
    <img src={blue1} id="blue1" alt="" />
    <img src={blue2} id="blue2" alt="" />
    {/* Expects only two quotes (so only two in Contentful per location) */}
    <Quotes quotes={quotes} />
  </div>
);
CountyPage.propTypes = countyPageTypes;
CountyPage.defaultProps = countyPageDefault;

export default CountyPage;
