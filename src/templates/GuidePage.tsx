import React from 'react';
import { graphql } from 'gatsby';
import { GuidePageProps, GuidePageDefaultProps } from './GuidePage.interface';

import Layout from '../components/layout/Layout';
import GuideContent from '../components/guideContent/GuideContent';
import Navbar from '../components/navbar/Navbar';
import LeftSidebar from '../components/dualSidebar/leftSidebar/LeftSidebar';
import RightSidebar from '../components/dualSidebar/rightSidebar/RightSidebar';

const GuidePage: React.FC<GuidePageProps> = ({ pageContext, data }) => {
  const { guideData, sidebarData, rightSidebarData } = data;
  const { category } = pageContext;

  return (
    <Layout
      header={<Navbar location={{ pathname: '/guide' }} />}
      content={<GuideContent generalGuide={guideData} category={category} />}
      enableLeftSidebar
      leftSidebar={<LeftSidebar sidebarData={sidebarData} location="guide" title="General Guides" /* TODO: export to const */ />}
      enableRightSidebar
      rightSidebar={
        <RightSidebar category={category} resources={rightSidebarData} />
    }
    />
  );
};

export const query = graphql`
  query GuideQuery($category: String!) {
    guideData: allContentfulGeneralGuide(
      filter: {category: {eq: $category}},
      sort: {order: ASC, fields: identifier}
    ) {
      nodes {
        title: identifier
        content {
          content
        }
      }
    }
    sidebarData: allContentfulGeneralGuide(
      sort: {order: ASC, fields: identifier}
    ) {
      group(field: category) {
        category: fieldValue
        nodes {
          title: identifier
        }
      }
    }
    rightSidebarData: allContentfulGeneralGuide(
      filter: {category: {eq: $category}},
      sort: {order: ASC, fields: identifier}
    ) {
      nodes {
        title: identifier
      }
    }
  }  
`;

GuidePage.defaultProps = GuidePageDefaultProps;

export default GuidePage;
