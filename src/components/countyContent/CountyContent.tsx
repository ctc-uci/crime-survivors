import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Menu } from 'antd';
import { v4 } from 'uuid';

import './countyContent.scss';
import { pathify } from '../../common/utils/commonUtils';
import { FeaturedCategories, Quotes } from '../../templates/CountyPage.interface';
import { GuideLandingQueryType, UrlRouter } from '../../common/interfaces/global.interfaces';
import { GUIDES_PATH_PREFIX } from '../../common/utils/constants';

import laCitySvg from './assets/la_city.svg';
import laCountySvg from './assets/la_county.svg';
import ocCountySvg from './assets/oc_county.svg';
import riversideCountySvg from './assets/riverside_county.svg';
import sbCountySvg from './assets/sb_county.svg';
import sdCountySvg from './assets/sd_county.svg';
import vcCountySvg from './assets/vc_county.svg';

const { SubMenu } = Menu;

const guideDisplay: {[key: string]: [string, string]} = {
  'Los Angeles County': ['LA County', laCountySvg],
  'Orange County': ['OC', ocCountySvg],
  'Riverside County': ['Riverside County', riversideCountySvg],
  'San Bernardino': ['San Bernardino', sbCountySvg],
  'San Diego': ['SD', sdCountySvg],
  'Los Angeles': ['LA', laCitySvg],
  'Ventura County': ['Ventura County', vcCountySvg],
};

interface CountyContentPropType {
  featuredCategories: FeaturedCategories;
  quotes: Quotes;
  location: string;
  url: UrlRouter;
}

const CountyContent: React.FC<CountyContentPropType> = ({
  featuredCategories, quotes, location, url,
}) => {
  const items = featuredCategories.group.slice(0, 5).map(({ fieldValue: category, nodes }) => {
    const bodyMsg = nodes.map(({ title }) => title).join(', ');
    return {
      title: category,
      body: `${bodyMsg.slice(0, 80) + (bodyMsg.length > 80 ? '...' : '')}`,
      link: pathify([location, category]),
    };
  });

  const { allContentfulGeneralGuide }: GuideLandingQueryType = useStaticQuery(graphql`
        query GuidesQuery{
            allContentfulGeneralGuide {
                group(field: category, limit: 3) {
                   fieldValue
                    nodes {
                        identifier
                    }
                }
            }
        }
    `);

  const { group: guideCategories } = allContentfulGeneralGuide;
  const [locationName, shownImg] = guideDisplay[location];

  return (
    <div className="county-landing-container">
      {/* beginning message/section/summary */}
      <div className="county-landing-section reversed-col">
        <div className="half">
          <p className="header">{`${locationName} Guide`}</p>
          <p className="description">
            The resources in this guide provide crime survivors with
            the necessary information to recover and find support in
            {` ${location}`}
            . This guide is produced by Crime
            Survivors.
          </p>
          <p className="description">
            See the sidebar to the left to find some relevant
            resources in
            {' '}
            {location}
            .
          </p>
        </div>
        <div className="half center-flex-row" style={{ padding: 0 }}>
          <img id="county-landing-pic" src={shownImg} alt="" />
        </div>
      </div>

      {/* carousel preview */}
      <div className="county-landing-section">
        <div className="half" style={{ width: '100%', paddingTop: 0 }}>
          <p className="subheader">Featured Sections</p>
          <div className="recommendation-card-container">
            {items.map((item) => (
              <div className="recommendation-card">
                <div>
                  <p className="recommendation-card-title">
                    {item.title}
                  </p>
                  <p className="recommendation-card-body">
                    {item.body}
                  </p>
                </div>
                <a className="link-button" href={item.link}>Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="county-landing-section">
        <div className="half" style={{ width: '100%', padding: '0px 100px' }}>
          <p className="subheader">General Guides</p>
          <p className="description">
            The mission of Crime Survivors is to provide hope and healing
            to victims and survivors of crime through advocacy and the support
            of resources, information, and empowerment. All victims of
            crime have the right and responsibility to survive.
          </p>
        </div>
      </div>

      {/* General guides */}
      <div className="county-landing-section">
        <div className="half" style={{ width: '100%', padding: '0px 100px' }}>
          <Menu mode="inline" style={{ border: '1px solid #000' }}>
            {guideCategories.map(({ fieldValue, nodes }) => (
              <SubMenu key={v4()} title={<p className="submenu-header">{fieldValue}</p>}>
                {nodes.map(({ identifier: title }) => (
                  <Menu.Item key={v4()}>
                    <Link
                      to={pathify([GUIDES_PATH_PREFIX, fieldValue], title)}
                      className="resource-ref"
                    >
                      {title}
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </div>
      </div>

      {/* Quotes section */}
      <div className="county-landing-section">
        {quotes.nodes.length > 0
          ? (
            <div className="half" style={{ width: '100%' }}>
              <p className="subheader">Quotes from our community</p>
              <Menu mode="inline" style={{ border: '1px solid #000' }}>
                {quotes.nodes.map(({ author, organization, quote }) => (
                  <SubMenu key={v4()} title={<p className="submenu-header">{`A message from the ${organization}`}</p>}>
                    <Menu.Item key={v4()}>
                      <p>{quote.quote}</p>
                      <p><b>{author}</b></p>
                    </Menu.Item>
                  </SubMenu>
                ))}
              </Menu>
            </div>
          )
          : <div style={{ paddingTop: 100 }} />}
      </div>
    </div>
  );
};

export default CountyContent;
