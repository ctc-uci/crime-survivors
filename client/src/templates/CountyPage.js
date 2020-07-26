import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PageContainer from '../components/pagecontainer';
import Sidebar from '../components/sidebar/sidebar';
import CountyBody from '../components/CountyBody/CountyBody';
import CategorySidebarContent from '../components/sidebar/content/categorySidebarContent';

const CountyPage = ({ data, pageContext, location: url }) => {
  const { sidebarData, quotes } = data;
  const { category, location } = pageContext;

  return (
    <div>
      <PageContainer
        sidebar={(
          <Sidebar
            title={location}
            content={<CategorySidebarContent url={url} content={sidebarData} resourceId="" selecedCategory={category} location={location} />}
          />
        )}
        body={(
          <CountyBody
            location={pageContext.location}
            quotes={quotes.nodes}
          />
        )}
      />
    </div>
  );
};

export const query = graphql`
    query CountyQuery( $location: String! ) {
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

CountyPage.propTypes = {
  data: PropTypes.shape({
    sidebarData: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          category: PropTypes.string,
          resources: PropTypes.arrayOf(
            {
              title: PropTypes.string,
              id: PropTypes.string,
            },
          ),
        }),
      ),
    }),
    quotes: PropTypes.shape({
      nodes: PropTypes.shape({
        author: PropTypes.string,
        organization: PropTypes.string,
        quote: PropTypes.shape({
          quote: PropTypes.string,
        }),
      }),
    }),
  }),
  pageContext: PropTypes.shape({
    category: PropTypes.string,
    location: PropTypes.string,
  }),
  location: {},
};

CountyPage.defaultProps = {
  data: {
    sidebarData: {
      group: [{
        category: 'category',
        resources: [
          {
            title: 'title',
            id: 'id',
          },
        ],
      }],
    },
    quotes: {
      nodes: {
        author: 'AUTHOR',
        organization: 'ORG',
        quote: {
          quote: 'QUOTE',
        },
      },
    },
  },
  pageContext: {
    category: 'category',
    location: 'location',
  },
  location: PropTypes.shape({
    hash: PropTypes.string,
    host: PropTypes.string,
    hostname: PropTypes.string,
    href: PropTypes.string,
    key: PropTypes.string,
    origin: PropTypes.string,
    pathname: PropTypes.string,
    port: PropTypes.string,
    protocol: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.string,
  }),
};

export default CountyPage;
