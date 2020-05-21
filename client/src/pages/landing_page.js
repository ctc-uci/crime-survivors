import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { useStaticQuery, graphql, Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
// TODO: eslint error on the next line, not sure why it wont let me reference parent
import '../styles/LandingPage.css'; // eslint-disable-line

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query CountyQuery {
      allContentfulResource {
        distinct(field: location)
      }
    }`);

  // no proptype with this method of using static query
  // TODO: https://www.gatsbyjs.org/docs/static-query/#typechecking

  const { allContentfulResource } = data;
  const { distinct } = allContentfulResource; // eslint-disable-line

  const fakeCountyData = [
    { county: 'Los Angeles County', image: 'https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612' },
    { county: 'Orange County', image: 'https://www.cbre.us/-/media/cbre/countryunitedstates/corporate-offices/southern%20california/orange%20county/orangecounty_module_768x582.png?mh=0&w=768&mw=0&h=582&la=en&hash=739D4EF8215D3CB09D8CD0293346ECF50460F36B' },
    { county: 'San Bernadino County', image: 'https://siteselection.com/issues/2016/sep/images/SB_Arrowhead1.jpg' },
    { county: 'Los Angeles County2', image: 'https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612' },
    { county: 'Orange County2', image: 'https://www.cbre.us/-/media/cbre/countryunitedstates/corporate-offices/southern%20california/orange%20county/orangecounty_module_768x582.png?mh=0&w=768&mw=0&h=582&la=en&hash=739D4EF8215D3CB09D8CD0293346ECF50460F36B' },
    { county: 'San Bernadino County2', image: 'https://siteselection.com/issues/2016/sep/images/SB_Arrowhead1.jpg' },
    { county: 'Los Angeles County3', image: 'https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612' },
    { county: 'Orange County3', image: 'https://www.cbre.us/-/media/cbre/countryunitedstates/corporate-offices/southern%20california/orange%20county/orangecounty_module_768x582.png?mh=0&w=768&mw=0&h=582&la=en&hash=739D4EF8215D3CB09D8CD0293346ECF50460F36B' },
    { county: 'San Bernadino County3', image: 'https://siteselection.com/issues/2016/sep/images/SB_Arrowhead1.jpg' }];

  return (
    <div className="container">
      <p>Escape the site</p>
      <p>Header</p>
      <div className="banner-container">
        <img className="logo" alt="logo" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/28168041_1972360476125648_1736462436458228316_n.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=V2HTistCnSwAX934uf5&_nc_ht=scontent-lax3-1.xx&oh=69c59e6e1b440791960fa81c43e52fe9&oe=5EEA7B17" />
        <div className="inner-banner">
          <h1 className="blue">Crime Survivors Resources</h1>
          <i className="blue">&quot;Advocacy through action - Serving Southern California&quot;</i>
        </div>
      </div>
      <h2 className="blue">COUNTY RESOURCE GUIDES</h2>
      <div className="county-container ">
        {fakeCountyData.map((countyData) => (
          <Link className="no-underline" to="/">
            <div className="county-card" style={{ backgroundImage: `url(${countyData.image})` }} key={uuidv4()}>
              <p className="county-text">{countyData.county}</p>
            </div>
          </Link>
        ))}
      </div>
      <p>Footer</p>
    </div>
  );
};

LandingPage.defaultProps = {

};

LandingPage.propTypes = {

};

export default LandingPage;
