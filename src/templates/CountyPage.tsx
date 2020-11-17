/* eslint-disable */
import React from 'react';
import { graphql } from 'gatsby';
import { CountyPageProps, CountyPageDefaultProps } from './CountyPage.interface';

import Layout from '../components/layout/Layout';
import Navbar from '../components/navbar/Navbar';
import LeftSidebar from '../components/dualSidebar/leftSidebar/LeftSidebar';
import CountyContent from '../components/countyContent/CountyContent';

const CountyPage: React.FC<CountyPageProps> = ({ pageContext, data, location: url }) => {
  const { featuredCategories, sidebarData, quotes } = data;
  const { location } = pageContext;

  console.log('1', featuredCategories);
  console.log('2', quotes);
  console.log('3', sidebarData);
  console.log('4', location);
  console.log('5', url);

  return (
    <Layout
      header={<Navbar location={{ pathname: '/guide' }} />}
      content={(
        <CountyContent {...{
          featuredCategories, quotes, location, url,
        }}
        />
)}
      enableLeftSidebar
      leftSidebar={<LeftSidebar sidebarData={sidebarData} location={location} title={location} />}
    />
  );
};

export const query = graphql`
    query CountyQuery( $location: String! ) {
    featuredCategories: allContentfulResourceGuide(
      filter: {location: {eq: $location}},
    ) {
      group(field: category, limit: 3) {
        fieldValue
        nodes {
          title
        }
      }
    }
    sidebarData: allContentfulResourceGuide(
      filter: { location: { eq: $location } },
      sort: {order: ASC, fields: title}
    ) {
      group(field: category) {
        nodes {
          id
          title
        }
        category: fieldValue
      }
    }
    quotes: allContentfulQuotes(filter: {location: {eq: $location }}
    ) {
      nodes {
        author
        organization
        quote {
          quote
        }
      }
    }
  }
`;

CountyPage.defaultProps = CountyPageDefaultProps;

export default CountyPage;
