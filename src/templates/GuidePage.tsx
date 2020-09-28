import React from 'react';
import { graphql } from 'gatsby';
import { GuidePageProps, GuidePageDefaultProps } from './GuidePage.interface';

import Layout from '../components/layout/Layout';
import GuideContent from '../components/guideContent/GuideContent';
import Navbar from '../components/navbar/navbar';
import LeftSidebar from '../components/dualSidebar/leftSidebar/LeftSidebar';

const GuidePage: React.FC<GuidePageProps> = ({ pageContext, data, location: url }) => {
  const { guideData, sidebarData } = data;
  const { category } = pageContext;

  console.log('1', sidebarData);
  console.log('2', category);
  console.log('3', url);

  return (
    <Layout
      header={<Navbar location={{ pathname: '/guide' }} />}
      content={<GuideContent generalGuide={guideData} category={category} />}
      enableLeftSidebar
      leftSidebar={<LeftSidebar sidebarData={sidebarData} location="guide" />}
      enableRightSidebar
    />
  );
};

export const query = graphql`
  query GuideQuery($category: String!) {
    guideData: allContentfulGeneralGuide(filter: {category: {eq: $category}}) {
      nodes {
        title: identifier
        content {
          content
        }
      }
    }
    sidebarData: allContentfulGeneralGuide {
      group(field: category) {
        category: fieldValue
        nodes {
          title: identifier
        }
      }
    }
  }  
`;

GuidePage.defaultProps = GuidePageDefaultProps;

export default GuidePage;
