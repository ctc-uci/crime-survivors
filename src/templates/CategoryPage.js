import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// TODO THIS ESLINT DISABLE IS TEMPORARY
/* eslint-disable no-unused-vars */

const CategoryPage = ({ data, pageContext, location: url }) => {
  const { source, sidebarData } = data;
  const { resources } = source;
  const { category, location } = pageContext;

  return (
    <div />
  );
};

/* eslint-enable no-unused-vars */

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
  location: {},
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

export default CategoryPage;
