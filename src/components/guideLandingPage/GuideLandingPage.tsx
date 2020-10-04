import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { v4 } from 'uuid';
import { Menu } from 'antd';

import './guideLandingPage.scss';
import { pathify } from '../../common/utils/commonUtils';
import Layout from '../layout/Layout';
import Carousel from '../carousel/carousel';
import { UrlRouter } from '../../common/interfaces/global.interfaces';
import Navbar from '../navbar/Navbar';
import landingPic from './assets/landing-pic.svg';
import { GUIDE_LANDING_BASE } from '../../common/utils/constants';

const { SubMenu } = Menu;

interface GuideLandingQueryType {
  allContentfulGeneralGuide: {
    distinct: string[];
    nodes: {
      identifier: string;
      category: string[];
    }[];
  };
  allContentfulResource: {
    distinct: string[];
  };
}

interface GuideLandingPagePropType {
  location: UrlRouter;
}

const GuideLandingPageContent: React.FC<GuideLandingPagePropType> = ({ location: url }) => {
  const { allContentfulGeneralGuide, allContentfulResource }: GuideLandingQueryType = useStaticQuery(graphql`
    query GuideLandingQuery{
      allContentfulGeneralGuide {
        distinct(field: category)
        nodes {
          identifier
          category
        }
      }
      allContentfulResource {
        distinct(field: location)
      }
    }
  `);

  const {
    distinct: guideCategories,
    nodes: guides,
  } = allContentfulGeneralGuide;

  const {
    distinct: locations,
  } = allContentfulResource;

  const items = guideCategories.map((category) => ({
    title: category,
    body: guides.filter(({ category: categories }) => categories.includes(category))
      .map(({ identifier }) => identifier)
      .slice(0, 2)
      .join(', '),
    link: pathify([GUIDE_LANDING_BASE, category]),
  }));

  return (
    <div className="guide-landing-container">

      {/* beginning message/section/summary */}
      <div className="guide-landing-section reversed-col">
        <div className="half">
          <p className="header">General Guides</p>
          <p className="description">
            The mission of Crime Survivors is to provide hope and healing to
            victims and survivors of crime through advocacy and the support
            of resources, information, and empowerment. All victims of crime
            have the right and responsibility to survive.
          </p>
        </div>
        <div className="half center-flex-row" style={{ padding: 0 }}>
          <img id="guide-landing-pic" src={landingPic} alt="" />
        </div>
      </div>

      {/* carousel preview */}
      <div className="guide-landing-section">
        <div className="half" style={{ width: '100%' }}>
          <p className="subheader">5 ways Crime Survivors can help you</p>
          <Carousel
            items={items}
            location={url}
          />
        </div>
      </div>

      {/* dropdown menu/preview */}
      <div className="guide-landing-section">
        <div className="half">
          <p className="subheader">What&apos;s in each section?</p>
          <p className="description">
            Curious about what each category contains? Get a
            quick glance at the different resources available by
            accessing the dropdown menu here.
          </p>
        </div>
        <div className="half">
          <Menu mode="inline" style={{ border: '1px solid #000' }}>
            {items.map(({ title, body }) => (
              <SubMenu key={v4()} title={<p className="submenu-header">{title}</p>}>
                {body.split(', ').map((guideTitle) => (
                  <Menu.Item key={v4()}>
                    <Link
                      to={pathify([GUIDE_LANDING_BASE, title], guideTitle)}
                      className="resource-ref"
                    >
                      {guideTitle}
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </div>
      </div>

      {/* section to resource guides */}
      <div className="guide-landing-section">
        <div className="half">
          <p className="subheader">Want county-specific information?</p>
          <p className="description">
            We offer a wide range of support resources for
            survivors in seven different counties. Find your
            county here.
          </p>
        </div>
        <div className="half">
          <Menu mode="inline" style={{ border: '1px solid #000' }}>
            {locations.map((location) => (
              <Menu.Item key={v4()}>
                <Link to={pathify([location])} className="resource-ref">{location}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

const GuideLandingPage: React.FC<GuideLandingPagePropType> = ({ location: url }) => (
  <Layout
    header={<Navbar location={url} />}
    content={<GuideLandingPageContent location={url} />}
  />
);

export default GuideLandingPage;
