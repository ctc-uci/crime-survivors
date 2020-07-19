import React from 'react';
import PropTypes from 'prop-types';
import './CountyBody.css';
import './image.css';
import { Quotes, quotesTypes, quotesDefault } from './Quotes/Quotes';
import city from './images/city.svg';
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

const countyBodyTypes = {
  location: PropTypes.string,
  quotes: quotesTypes,
};
const countyBodyDefault = {
  location: 'LOCATION',
  quotes: quotesDefault,
};

const LandingHeader = ({ location }) => (
  <div className="landing-header">
    <div className="landing-text">
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
    <img src={city} id="city" alt="city" />
  </div>
);
LandingHeader.propTypes = countyBodyTypes.location;
LandingHeader.defaultProps = countyBodyDefault.location;

const CountyBody = ({ location, quotes }) => {
  const wavesOnQuotes = [
    <div>
      <img src={green1} id="green1" alt="" />
      <img src={green2} id="green2" alt="" />
    </div>,
    <div>
      <img src={blue1} id="blue1" alt="" />
      <img src={blue2} id="blue2" alt="" />
    </div>,
  ];

  const wavesToRender = quotes.map((_, index) => wavesOnQuotes[index % 2]);

  return (
    <div className="county-container">
      <LandingHeader location={location} />
      <img src={purple} id="purple" alt="" />
      {wavesToRender}
      <Quotes quotes={quotes} />
    </div>
  );
};
CountyBody.propTypes = countyBodyTypes;
CountyBody.defaultProps = countyBodyDefault;

export default CountyBody;
