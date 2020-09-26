import React from 'react';
import { graphql } from 'gatsby';
import { CountyPageProps, CountyPageDefaultProps } from './CountyPage.interface';

const CountyPage: React.FC<CountyPageProps> = ({ pageContext, data, location: url }) => {
  const { featuredSection, sidebarData, quotes } = data;
  const { location } = pageContext;

  console.log('1', featuredSection);
  console.log('2', quotes);
  console.log('3', sidebarData);
  console.log('4', location);
  console.log('5', url);

  return <div />;
};

export const query = graphql`
    query CountyQuery( $location: String! ) {
    featuredSection: allContentfulResource(filter: {location: {eq: $location}}) {
      group(field: location, limit: 5) {
        nodes {
          title
        }
      }
    }
    sidebarData: allContentfulResource(
      filter: { location: { eq: $location } }
    ) {
      group(field: category) {
        resources: nodes {
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
