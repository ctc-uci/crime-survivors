import React from 'react';
import { Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { pathify } from '../utils/commonUtils';

import '../styles/landingPage.css';
import '../styles/common.css';
import Navbar from './navbar/navbar';
import EscapeButton from './escape/escapeButton';
import Footer from './footer/Footer';
import BannerImage from "../images/Banner-Img.png" // eslint-disable-line
import guideGraphic1 from "../images/Guide-Find-An-Advocate.svg" // eslint-disable-line
import guideGraphic2 from "../images/Guide-Heal-And-Recover.svg" // eslint-disable-line
import guideGraphic3 from "../images/Guide-Learn-About-Victims-Rights.svg" // eslint-disable-line
import guideGraphic4 from "../images/Guide-Obtain-Crisis-Support.svg" // eslint-disable-line
import guideGraphic5 from "../images/Guide-Pay-For-Crime.svg" // eslint-disable-line
import bgBannerBottom1 from "../images/Background-Banner-Bottom.svg" // eslint-disable-line
import bgBannerBottom2 from "../images/Background-Banner-Bottom2.svg" // eslint-disable-line
import bgCountyTop1 from "../images/Background-County-Top.svg" // eslint-disable-line
import bgCountyTop2 from "../images/Background-County-Top2.svg" // eslint-disable-line
import bgCountyBottom from "../images/Background-County-Bottom.svg" // eslint-disable-line

const LandingPage = () => {
  const fakeCountyData = [
    {
      county: 'City of Los Angeles',
      image:
        'https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612',
    },
    {
      county: 'Los Angeles County',
      image:
        'https://www.cbre.us/-/media/cbre/countryunitedstates/corporate-offices/southern%20california/orange%20county/orangecounty_module_768x582.png?mh=0&w=768&mw=0&h=582&la=en&hash=739D4EF8215D3CB09D8CD0293346ECF50460F36B',
    },
    {
      county: 'Orange County',
      image:
        'https://siteselection.com/issues/2016/sep/images/SB_Arrowhead1.jpg',
    },
    {
      county: 'San Bernardino',
      image:
        'https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612',
    },
    {
      county: 'Ventura County',
      image:
        'https://www.cbre.us/-/media/cbre/countryunitedstates/corporate-offices/southern%20california/orange%20county/orangecounty_module_768x582.png?mh=0&w=768&mw=0&h=582&la=en&hash=739D4EF8215D3CB09D8CD0293346ECF50460F36B',
    },
    {
      county: 'San Diego County',
      image:
        'https://siteselection.com/issues/2016/sep/images/SB_Arrowhead1.jpg',
    },
    {
      county: 'Riverside County',
      image:
        'https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612',
    },
  ];

  const guideBoxData = [
    { title: 'Find an Advocate', svg: guideGraphic1, number: 1 },
    { title: 'Obtain Crisis Support', svg: guideGraphic2, number: 2 },
    { title: "Learn About Victim's Rights", svg: guideGraphic3, number: 3 },
    { title: 'Pay for Crime Related Expenses', svg: guideGraphic4, number: 4 },
    { title: 'Heal and Recover', svg: guideGraphic5, number: 5 },
  ];

  return (
    <div>
      <EscapeButton />
      <Navbar />
      <div id="container">
        <div id="banner-section">
          <div id="banner-container">
            <div id="banner-text-container">
              <h1 className="blue lp-header">Crime Survivors Resources</h1>
              <p className="lp-subheader" style={{ maxWidth: '500px', minWidth: '300px' }}>
                The mission of Crime Survivors is to provide hope and healing to
                victims and survivors of crime through advocacy and the support
                of resources, information, and empowerment. All victims of crime
                have the right and responsibility to survive.
              </p>
              <Link
                id="find-your-county-btn"
                to={pathify([''], 'county-section')}
              >
                Find your County
              </Link>
            </div>
            <div id="banner-image-container">
              <img id="banner-image" alt="banner" src={BannerImage} />
            </div>
          </div>
          <img className="bgBannerBottom" alt="bgBannerBottom1" src={bgBannerBottom1} />
          <img className="bgBannerBottom02" alt="bgBannerBottom2" src={bgBannerBottom2} />
        </div>

        <div id="guide-section">
          <Link className="guide-btn" to={pathify(['guides', 'overview'])}>
            General Guides
          </Link>
          <div className="guide-icon-container">
            {guideBoxData.map((guide) => (
              <div className="guide-box">
                <div className="guide-box-img-container">
                  <img className="no-margin" src={guide.svg} alt={guide.svg} />
                </div>
                <p className="guide-box-text">{guide.title}</p>
                {/* <div className="guide-box-number">{guide.number}</div> */}
              </div>
            ))}
          </div>
        </div>

        <div id="county-section">
          <h2 className="blue lp-guide-title" style={{ margin: '84px 0px 16px 0px' }}>
            County Resource Guides
          </h2>
          <p className="lp-guide-header" style={{ maxWidth: '600px', textAlign: 'center' }}>
            These guides are filled with resources to help victims become
            survivors. The resources and referrals provided herein can be the
            first step for victims and their families to rebuild their lives.
          </p>
          <div id="county-container">
            {fakeCountyData.map((countyData) => (
              <Link
                className="no-decor"
                to={pathify([countyData.county, ''])}
              >
                <div
                  className="county-card"
                  style={{ backgroundImage: `url(${countyData.image})` }}
                  key={uuidv4()}
                >
                  <p className="county-text">{countyData.county}</p>
                </div>
              </Link>
            ))}
          </div>
          <img className="bgCountyTop" alt="bgBannerTop1" src={bgCountyTop1} />
          <img className="bgCountyTop2" alt="bgBannerTop2" src={bgCountyTop2} />
          <img className="bgCountyBottom" alt="bgBannerBottom" src={bgCountyBottom} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
