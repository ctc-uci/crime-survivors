import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { useStaticQuery, graphql, Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
// TODO: eslint error on the next line, not sure why it wont let me reference parent
import '../styles/LandingPage.css'; // eslint-disable-line
import BannerImage from '../images/banner-img.png';// eslint-disable-line
import G1 from '../images/Find-An-Advocate.svg';// eslint-disable-line
import G2 from '../images/Heal-And-Recover.svg';// eslint-disable-line
import G3 from '../images/Learn-About-Victims-Rights.svg';// eslint-disable-line
import G4 from '../images/Obtain-Crisis-Support.svg';// eslint-disable-line
import G5 from '../images/Pay-For-Crime.svg';// eslint-disable-line
import B1 from '../images/Rectangle50.svg';// eslint-disable-line
import B2 from '../images/Rectangle51.svg';// eslint-disable-line
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

  return (
    <div className="container">
      <p>Escape the site</p>
      <p>Header</p>
      <div className="banner-section">
        <div className="banner-container">
          <div className="banner-text-container">
            <h1 className="blue">Crime Survivors Resources</h1>
            <p style={{ maxWidth: '500px', minWidth: '300px' }}>The mission of Crime Survivors is to provide hope and healing to victims and survivors of crime through advocacy and the support of resources, information, and empowerment. All victims of crime have the right and responsibility to survive.</p>
            <button className="find-your-county-btn" type="button">Find your County</button>
          </div>
          <div className="banner-image-container">
            <img className="banner-image " alt="img" src={BannerImage} />
          </div>
        </div>
        <img className="background1" alt="B1" src={B1} />
        <img className="background1" alt="B2" src={B2} />
      </div>

      <div className="guide-section">
        <button className="guide-btn" type="button">General Guides</button>
        <div className="guide-box-container">
          <div className="guide-box">
            <div className="guide-box-img-container">
              <img className="no-margin" src={G1} alt="G1" />
            </div>
            <p className="guide-box-text">Find an Advocate</p>
            <div className="guide-box-number">1</div>
          </div>
          <div className="guide-box">
            <div className="guide-box-img-container">
              <img className="no-margin" src={G2} alt="G2" />
            </div>
            <p className="guide-box-text">Obtain Crisis Support</p>
            <div className="guide-box-number">2</div>
          </div>
          <div className="guide-box">
            <div className="guide-box-img-container">
              <img className="no-margin" src={G3} alt="G3" />
            </div>
            <p className="guide-box-text">Learn About Victim&rsquo;s Rights</p>
            <div className="guide-box-number">3</div>
          </div>
          <div className="guide-box">
            <div className="guide-box-img-container">
              <img className="no-margin" src={G4} alt="G4" />
            </div>
            <p className="guide-box-text">Pay for Crime Related Expenses</p>
            <div className="guide-box-number">4</div>
          </div>
          <div className="guide-box">
            <div className="guide-box-img-container">
              <img className="no-margin" src={G5} alt="G5" />
            </div>
            <p className="guide-box-text">Heal and Recover</p>
            <div className="guide-box-number">5</div>
          </div>
        </div>
      </div>


      <div className="county-section">
        <h2 className="blue" style={{ margin: '84px 0px 16px 0px' }}>COUNTY RESOURCE GUIDES</h2>
        <p style={{ maxWidth: '600px', textAlign: 'center' }}>These guides are filled with resources to help victims become survivors. The resources and referrals provided herein can be the first step for victims and their families to rebuild their lives.</p>
        <div className="county-container ">
          {fakeCountyData.map((countyData) => (
            <Link className="no-underline" to="/">
              <div className="county-card" style={{ backgroundImage: `url(${countyData.image})` }} key={uuidv4()}>
                <p className="county-text">{countyData.county}</p>
              </div>
            </Link>
          ))}
        </div>
        <img className="background2" alt="B1" src={bgCountyTop1} />
        <img className="background2" alt="B1" src={bgCountyTop2} />
        <img className="background3" alt="B1" src={bgCountyBottom} />
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
