import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PageContainer from '../components/pagecontainer';
import CategoryBody from '../components/CategoryBody/CategoryBody';
import Sidebar from '../components/sidebar/sidebar';
import CategorySidebarContent from '../components/sidebar/content/categorySidebarContent';

const CategoryPage = ({ data, pageContext }) => {
  // console.table(['HELLO', pageContext]);

  console.log('here', data, pageContext);
  const { source, sidebarData } = data;
  const { resources } = source;
  const { category, location } = pageContext;

  return (
    <PageContainer
      sidebar={(
        <Sidebar
          title={location}
          content={<CategorySidebarContent content={sidebarData} resourceId="" selecedCategory={category} location={location} />}
        />
      )}
      body={<CategoryBody resources={resources} />}
    />
  );
};

export const query = graphql`
  query CategoryQuery($category: String!, $location: String!) {
    source: allContentfulResource(
      filter: { category: { eq: $category }, location: { eq: $location } }
    ) {
      resources: nodes {
        id
        location
        category
        title
        phone {
          number
          desc
        }
        website
        email
        address
        desc {
          desc
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
  }
`;

// Defaults values for props, required by eslint
CategoryPage.defaultProps = {
  data: {
    source: {
      resources: [{
        location: 'location',
        address: 'address',
        category: 'category',
        phone: [{ desc: 'desc', number: '(555) 555-5555' }],
        title: 'title',
        desc: {
          desc: 'desc',
        },
      },
      ],
    },
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
  },
  pageContext: {
    category: 'category',
    location: 'location',
  },
};

// // Proptype validation, required by eslint
CategoryPage.propTypes = {
  data: PropTypes.shape({
    source: PropTypes.shape({
      resources: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.string,
          address: PropTypes.string,
          category: PropTypes.string,
          phone: PropTypes.arrayOf(
            PropTypes.shape({
              desc: PropTypes.string,
              number: PropTypes.string,
            }),
          ),
          title: PropTypes.string,
          desc: PropTypes.shape({
            desc: PropTypes.string,
          }),
        }),
      ),
    }),
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
  }),
  pageContext: PropTypes.shape({
    category: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default CategoryPage;
