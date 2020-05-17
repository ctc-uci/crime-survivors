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
    { county: 'San Bernadino County', image: 'https://ca-times.brightspotcdn.com/dims4/default/b8a10f1/2147483647/strip/true/crop/2048x1365+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F79%2Fc4%2Fa48c7e289176d0554633ae860fc3%2Fla-me-ln-san-bernardino-mayor-carey-davis-2014-002' },
    { county: 'Los Angeles County2', image: 'https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612' },
    { county: 'Orange County2', image: 'https://www.cbre.us/-/media/cbre/countryunitedstates/corporate-offices/southern%20california/orange%20county/orangecounty_module_768x582.png?mh=0&w=768&mw=0&h=582&la=en&hash=739D4EF8215D3CB09D8CD0293346ECF50460F36B' },
    { county: 'San Bernadino County2', image: 'https://ca-times.brightspotcdn.com/dims4/default/b8a10f1/2147483647/strip/true/crop/2048x1365+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F79%2Fc4%2Fa48c7e289176d0554633ae860fc3%2Fla-me-ln-san-bernardino-mayor-carey-davis-2014-002' },
    { county: 'Los Angeles County3', image: 'https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612' },
    { county: 'Orange County3', image: 'https://www.cbre.us/-/media/cbre/countryunitedstates/corporate-offices/southern%20california/orange%20county/orangecounty_module_768x582.png?mh=0&w=768&mw=0&h=582&la=en&hash=739D4EF8215D3CB09D8CD0293346ECF50460F36B' },
    { county: 'San Bernadino County3', image: 'https://ca-times.brightspotcdn.com/dims4/default/b8a10f1/2147483647/strip/true/crop/2048x1365+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F79%2Fc4%2Fa48c7e289176d0554633ae860fc3%2Fla-me-ln-san-bernardino-mayor-carey-davis-2014-002' }];

  const fakeGuideData = [
    { title: 'guide title', link: 'some url' },
    { title: 'guide longer title', link: 'some url' },
    { title: 'guide title', link: 'some url' },
    { title: 'guide title', link: 'some url' },
    { title: 'guide longer title', link: 'some url' },
    { title: 'guide title', link: 'some url' },
    { title: 'guide title', link: 'some url' },
    { title: 'guide longer longer longer title', link: 'some url' },
    { title: 'guide title', link: 'some url' },
    { title: 'guide title', link: 'some url' },
    { title: 'guide title', link: 'some url' },
    { title: 'guide longer title', link: 'some url' },
    { title: 'guide title', link: 'some url' },
    { title: 'guide title', link: 'some url' },
    { title: 'guide longer longer title', link: 'some url' },
    { title: 'guide title', link: 'some url' },
    { title: 'guide title', link: 'some url' },
  ];

  return (
    <div className="container">
      <div className="banner-container">
        <img className="logo" alt="logo" src="https://via.placeholder.com/150" />
        <div className="inner-banner">
          <h1 className="inner-banner-text">Crime Survivors Resources</h1>
          <p className="inner-banner-text">&quot;Advocacy through action - Serving Southern California&quot;</p>
        </div>
      </div>
      <hr />
      <h2>COUNTY GUIDES</h2>
      <div className="county-container">
        {fakeCountyData.map((countyData) => (
          <div className="county-card" key={uuidv4()}>
            <img className="county-image" alt={uuidv4()} src={countyData.image} />
            <h6 className="county-text">{countyData.county}</h6>
          </div>
        ))}
      </div>
      <hr />
      <h2>GUIDES TO TAKE ACTION, GET HELP, YOUR RIGHTS</h2>
      <div className="guide-container">
        {fakeGuideData.map((guideData) => (
          <Link className="guide-item" key={uuidv4()} to={guideData.link}>
            <p>{guideData.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

LandingPage.defaultProps = {

};

LandingPage.propTypes = {

};

export default LandingPage;
