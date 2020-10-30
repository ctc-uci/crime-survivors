import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
// import { Link } from 'react-scroll';

import { UrlRouter } from '../../common/interfaces/global.interfaces';
import { pathify } from '../../common/utils/commonUtils';
import Layout from '../layout/Layout';
import Navbar from '../navbar/Navbar';
import Button from '../Button/Button';
import Footer from '../footer/Footer';

import './landing-page.scss';

import mapImg from './assets/map.jpg';
import BannerImg from '../../common/media/stock-photo.jpeg';
import LandingPageAccent from '../../common/media/LandingPageAccent.png';
import HeartIcon from '../../common/media/heart-icon.png';
import MoneyIcon from '../../common/media/money-icon.png';
import BookIcon from '../../common/media/book-icon.png';
import PeopleIcon from '../../common/media/people-icon.png';
import BuildingIcon from '../../common/media/building-icon.png';

import { FIND_COUNTY_SECTION_ID } from '../../common/utils/constants';

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
            <Button
              style={{ marginRight: '8px' }}
              body={(
                <Link
                  className="link-button"
                  to={pathify([''], FIND_COUNTY_SECTION_ID)}
                >
                  Find Your County
                </Link>
              )}
              fgColor="#FFFFFF"
              bgColor="#316E83"
            />
            <Button
              style={{ marginRight: '8px' }}
              body={(
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="link-button"
                  href="https://www.youtube.com/watch?v=2e8vcalCGpU"
                >
                  Watch Video
                </a>
              )}
              fgColor="#FFFFFF"
              bgColor="#316E83"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="landing-page-welcome-section-bottom-layout">
      <img
        className="accent-float-right disappear-on-mobile"
        alt="accent"
        src={LandingPageAccent}
      />
    </div>
  </div>
);

const GuideSummaryOverview: React.FC = () => {
  const guideSummaryCardData = [
    {
      icon: BuildingIcon,
      title: 'Find an Advocate',
      desc:
        'Need help with communication and cooperations across various public services? Make sure your rights are understood.',
    },
    {
      icon: PeopleIcon,
      title: 'Obtain Crisis Support',
      desc: 'Experiencing a crisis? Find support and community.',
    },
    {
      icon: BookIcon,
      title: "Learn About Victim's Rights",
      desc:
        "You are entitled to various victim servicecs. Let's make sure they are understood.",
    },
    {
      icon: MoneyIcon,
      title: 'Pay for Crime-Related Expenses',
      desc:
        'The aftermath of crime can be expensive. Figure out how you can be reimbursed for crime-related expenses.',
    },
    {
      icon: HeartIcon,
      title: 'Heal and Recover',
      desc:
        'The road traveled in the aftermath of a violent crime is slightly different for everyone, but we all need help and understanding along the way.',
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
              Before looking at specific resources, we recommend checking out
              our general guides. This information will come in handy for many
              different scenarios. Here are some examples of what you might
              find.
            </p>
          </div>
          {guideSummaryCardData.map(({ icon, title, desc }) => (
            <div className="landing-page-guide-cover-content-card">
              <img className="landing-page-guide-cover-content-card-icon" src={icon} alt={title} />
              <h3 className="blue">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ alignSelf: 'center', padding: '16px' }}>
          <Button
            body={(
              <a
                className="link-button"
                href="/guide"
              >
                View Full Guides
              </a>
              )}
            fgColor="#FFFFFF"
            bgColor="#316E83"
          />
        </div>
      </div>
    </div>
  );
};

const CountyOverview: React.FC = () => {
  interface GuideCountyQuery {
    allContentfulResourceGuide: {
      locations: string[]
    }
  }
  const {
    allContentfulResourceGuide,
  }: GuideCountyQuery = useStaticQuery(graphql`
    query GuideCountyQuery {
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
        <div
          id="find-your-county"
          className="landing-page-county-overview-half"
        >
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
                  <p>
                    <Link to={pathify([location])}>{location}</Link>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="landing-page-county-overview-accent">
        <img
          className="accent-float-right2"
          alt="accent"
          src={LandingPageAccent}
        />
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
