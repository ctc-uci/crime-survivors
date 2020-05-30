import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { useStaticQuery, graphql, Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

// TODO: eslint error on the next line, not sure why it wont let me reference parent
import '../styles/LandingPage.css'; // eslint-disable-line
import Navbar from '../components/navbar/navbar';
import EscapeButton from '../components/escape/escapeButton';
import BannerImage from '../images/Banner-Img.png';// eslint-disable-line
import guideGraphic1 from '../images/Guide-Find-An-Advocate.svg';// eslint-disable-line
import guideGraphic2 from '../images/Guide-Heal-And-Recover.svg';// eslint-disable-line
import guideGraphic3 from '../images/Guide-Learn-About-Victims-Rights.svg';// eslint-disable-line
import guideGraphic4 from '../images/Guide-Obtain-Crisis-Support.svg';// eslint-disable-line
import guideGraphic5 from '../images/Guide-Pay-For-Crime.svg';// eslint-disable-line
import bgBannerBottom1 from '../images/Background-Banner-Bottom.svg';// eslint-disable-line
import bgBannerBottom2 from '../images/Background-Banner-Bottom2.svg';// eslint-disable-line
import bgCountyTop1 from '../images/Background-County-Top.svg';// eslint-disable-line
import bgCountyTop2 from '../images/Background-County-Top2.svg';// eslint-disable-line
import bgCountyBottom from '../images/Background-County-Bottom.svg';// eslint-disable-line


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
    { county: 'Los Angeles County3', image: 'https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612' }];


  const guideBoxData = [
    { title: 'Find an Advocate', svg: guideGraphic1, number: 1 },
    { title: 'Obtain Crisis Support', svg: guideGraphic2, number: 2 },
    { title: 'Learn About Victim\'s Rights', svg: guideGraphic3, number: 3 },
    { title: 'Pay for Crime Related Expenses', svg: guideGraphic4, number: 4 },
    { title: 'Heal and Recover', svg: guideGraphic5, number: 5 },
  ];

  return (
    <div>
      <EscapeButton />
      <Navbar />
      <div id="container">
        {/* <p>Escape the site</p>
        <p>Header</p> */}


        <div id="banner-section">
          <div id="banner-container">
            <div id="banner-text-container">
              <h1 className="blue">Crime Survivors Resources</h1>
              <p style={{ maxWidth: '500px', minWidth: '300px' }}>The mission of Crime Survivors is to provide hope and healing to victims and survivors of crime through advocacy and the support of resources, information, and empowerment. All victims of crime have the right and responsibility to survive.</p>
              <button id="find-your-county-btn" type="button">Find your County</button>
            </div>
            <div id="banner-image-container">
              <img id="banner-image" alt="banner" src={BannerImage} />
            </div>
          </div>
          <img className="bgBannerBottom" alt="bgBannerBottom1" src={bgBannerBottom1} />
          <img className="bgBannerBottom" alt="bgBannerBottom2" src={bgBannerBottom2} />
        </div>

        <div id="guide-section">
          <button className="guide-btn" type="button">General Guides</button>
          <div className="guide-box-container">
            {guideBoxData.map((guide) => (
              <div className="guide-box">
                <div className="guide-box-img-container">
                  <img className="no-margin" src={guide.svg} alt={guide.svg} />
                </div>
                <p className="guide-box-text">{guide.title}</p>
                <div className="guide-box-number">{guide.number}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="county-section">
          <h2 className="blue" style={{ margin: '84px 0px 16px 0px' }}>COUNTY RESOURCE GUIDES</h2>
          <p style={{ maxWidth: '600px', textAlign: 'center' }}>These guides are filled with resources to help victims become survivors. The resources and referrals provided herein can be the first step for victims and their families to rebuild their lives.</p>
          <div id="county-container">
            {fakeCountyData.map((countyData) => (
              <Link className="no-decor" to="/">
                <div className="county-card" style={{ backgroundImage: `url(${countyData.image})` }} key={uuidv4()}>
                  <p className="county-text">{countyData.county}</p>
                </div>
              </Link>
            ))}
          </div>
          <img className="bgCountyTop" alt="bgBannerTop1" src={bgCountyTop1} />
          <img className="bgCountyTop" alt="bgBannerTop2" src={bgCountyTop2} />
          <img className="bgCountyBottom" alt="bgBannerBottom" src={bgCountyBottom} />
        </div>

        <p>Footer</p>
      </div>
    </div>
  );
};

LandingPage.defaultProps = {

};

LandingPage.propTypes = {

};

export default LandingPage;
