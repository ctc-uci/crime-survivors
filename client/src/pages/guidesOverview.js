/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PageContainer from '../components/pagecontainer';
import guideGraphic1 from "../images/Guide-Find-An-Advocate.svg" // eslint-disable-line
import guideGraphic2 from "../images/Guide-Heal-And-Recover.svg" // eslint-disable-line
import guideGraphic3 from "../images/Guide-Learn-About-Victims-Rights.svg" // eslint-disable-line
import guideGraphic4 from "../images/Guide-Obtain-Crisis-Support.svg" // eslint-disable-line
import guideGraphic5 from "../images/Guide-Pay-For-Crime.svg" // eslint-disable-line
import Sidebar from '../components/sidebar/sidebar';
import GuideSidebarContent from '../components/sidebar/content/guideSidebarContent';
import wave from '../images/Background-Banner-Bottom.svg';
import '../styles/guidesOverview.css';
import '../styles/common.css';

const guideBoxData = [
  { title: 'Find an Advocate', svg: guideGraphic1 },
  { title: 'Obtain Crisis Support', svg: guideGraphic2 },
  { title: "Learn About Victim's Rights", svg: guideGraphic3 },
  { title: 'Pay for Crime Related Expenses', svg: guideGraphic4 },
  { title: 'Heal and Recover', svg: guideGraphic5 },
];

const guidesOverviewBody = (
  <div className="guides-overview-container">
    <div className="go-header-container">
      <h1 className="go-title">General Guides</h1>
      <p className="go-subtitle">
        Crime victims often do not know where to turn in the aftermath of crime.
        The resources and referrals provided herein can be the first step for
        victims and their families to rebuild their lives.
      </p>
    </div>
    <div className="guide-icon-section">
      <div className="guide-icon-container">
        {guideBoxData.map((guide) => (
          <div>
            <div className="guide-box-img-container">
              <img
                className="no-margin guide-icon"
                src={guide.svg}
                alt={guide.svg}
              />
            </div>
            <div className="guide-box-text-container">
              <p className="guide-box-text">{guide.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <img src={wave} className="bgBannerBottom" alt="" />
  </div>
);

const guidesOverviewPage = ({ data }) => (
  <div>
    <PageContainer
      sidebar={(
        <Sidebar
          content={<GuideSidebarContent content={data.allContentfulGuide} />}
        />
    )}
      body={guidesOverviewBody}
    />
  </div>

);

guidesOverviewPage.propTypes = {
  data: PropTypes.shape({
    allContentfulGuide: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
        }),
      ),
    }),
  }),
};

guidesOverviewPage.defaultProps = {
  data: {
    content: {
      nodes: [
        {
          title: 'title',
        },
      ],
    },
  },
};

export const query = graphql`
  query GuideQuer {
    allContentfulGuide {
      nodes {
        title
      }
    }
  }  
`;

export default guidesOverviewPage;
