import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { UrlRouter } from '../../common/interfaces/global.interfaces';
import { pathify } from '../../common/utils/commonUtils';
import Layout from '../layout/Layout';
import Navbar from '../navbar/Navbar';
import Button from './Button';
import Footer from '../footer/Footer';

import './landing-page.scss';

import doubleDown from './assets/double-down.svg';
import doubleDownOutline from './assets/double-down-outline.svg';
import mapImg from './assets/socal_map.png';
import BannerImg from '../../common/media/stock-photo.jpeg';
import LandingPageAccent from '../../common/media/LandingPageAccent.png';
import HeartIcon from '../../common/media/heart-icon.png';
import MoneyIcon from '../../common/media/money-icon.png';
import BookIcon from '../../common/media/book-icon.png';
import PeopleIcon from '../../common/media/people-icon.png';
import BuildingIcon from '../../common/media/building-icon.png';

const WelcomeSection: React.FC = () => (
  <div className="landing-page-welcome-section">
    <div className="landing-page-welcome-section-layout">
      <div className="landing-page-welcome-section-half disappear-on-mobile">
        <div className="landing-page-welcome-section-half-img-container">
          <img className="rounded-shadow" alt="Banner" src={BannerImg} />
        </div>
      </div>
      <div className="landing-page-welcome-section-half">
        <div className="landing-page-welcome-section-half-text-container">
          <p className="h0 blue">Crime Survivors</p>
          <h1 className="blue">Resource Guides</h1>
          <hr className="blue" />
          <p className="blurb">
            The mission of Crime Survivors is to provide hope and healing to
            victims and survivors of crime through advocacy and the support of
            resources, information, and empowerment. All victims of crime have
            the right and responsibility to survive.
          </p>
          <div className="landing-page-welcome-section-half-text-container-button-array">
            <Button style={{ marginRight: '8px' }} body="Find Your County" fgColor="#FFFFFF" bgColor="#316E83" />
            <Button style={{ marginRight: '8px' }} body="Watch Video" fgColor="#316E83" bgColor="#FFFFFF" />
          </div>
        </div>
      </div>
    </div>
    <div className="landing-page-welcome-section-bottom-layout">
      <img src={doubleDown} alt="scroll down icon" />
      <img className="accent-float-right disappear-on-mobile" alt="accent" src={LandingPageAccent} />
    </div>
  </div>
);

const GuideSummaryOverview: React.FC = () => {
  const guideSummaryCardData = [
    {
      icon: BuildingIcon,
      title: 'Find an Advocate',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: PeopleIcon,
      title: 'Obtain Crisis Support',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: BookIcon,
      title: 'Learn About Victim\'s Rights',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: MoneyIcon,
      title: 'Pay for Crime-Related Expenses',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: HeartIcon,
      title: 'Heal and Recover',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
  ];

  return (
    <div className="landing-page-guide centered-flex-col">
      <div className="landing-page-guide-cover">
        <div className="landing-page-guide-cover-content">
          <div className="landing-page-guide-cover-content-desc">
            <h2 className="green">Not sure where to start?</h2>
            <h1 className="blue">Our General Guides are here to help.</h1>
            <hr className="blue" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          {guideSummaryCardData.map(({ icon, title, desc }) => (
            <div className="landing-page-guide-cover-content-card">
              <img src={icon} alt={title} />
              <h3 className="blue">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ alignSelf: 'center', padding: '16px' }}>
          <Button style={{ }} body="View Full Guides" fgColor="#FFFFFF" bgColor="#316E83" />
        </div>
      </div>
      <img className="double-down" src={doubleDownOutline} alt="two arrows down" />
    </div>
  );
};

const CountyOverview: React.FC = () => {
  interface GuideCountyQuery{
    allContentfulResourceGuide: {
      locations: string[]
    }
  }
  const { allContentfulResourceGuide }: GuideCountyQuery = useStaticQuery(graphql`
    query GuideCountyQuery{
      allContentfulResourceGuide {
        locations: distinct(field: location)
      }
    }
  `);

  const { locations } = allContentfulResourceGuide;

  return (
    <div className="landing-page-county-overview">
      <div className="landing-page-county-overview-layout">
        <div className="landing-page-county-overview-half disappear-on-mobile">
          <div className="landing-page-county-overview-half-img-container">
            <img src={mapImg} className="rounded-shadow" alt="map" />
          </div>
        </div>
        <div className="landing-page-county-overview-half">
          <div className="landing-page-county-overview-half-text-container">
            <h1 className="blue">County Resource Guides</h1>
            <hr className="blue" />
            <p className="blurb">
              These guides are filled with resources to help victims become
              survivors. The resources and referrals provided herein can be the
              first step for victims and their families to rebuild their lives.
            </p>
            <ul>
              {locations.map((location) => (
                <li>
                  <p><Link to={pathify([location])}>{location}</Link></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="landing-page-county-overview-accent">
        <img className="accent-float-right2" alt="accent" src={LandingPageAccent} />
      </div>
    </div>
  );
};

interface LandingPageProps {
  location: UrlRouter
}

const LandingPage: React.FC<LandingPageProps> = ({ location: url }) => {
  const Content: React.FC = () => (
    <div className="centered-flex-col">
      <WelcomeSection />
      <GuideSummaryOverview />
      <CountyOverview />
    </div>
  );

  return (
    <Layout
      header={<Navbar location={url} />}
      content={<Content />}
      footer={<Footer />}
    />
  );
};

export default LandingPage;
