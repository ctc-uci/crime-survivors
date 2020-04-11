import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PageContainer from '../components/pagecontainer';
import CategoryBody from '../components/CategoryBody';
import Sidebar from '../components/sidebar';

const CategoryPage = ({ data, pageContext }) => {
  const { source, sidebarData } = data;
  const { resources } = source;

  // simply displays all resources for this category in an ugly list
  return (
    <PageContainer
      sidebar={<Sidebar props={{ sidebarData, resourceId: '', category: pageContext.category }} />}
      body={<CategoryBody props={resources} />}
    />
  );
};

// we can query the needed resources according to the category passed in the
// context property of createPage() in gatsby-node.js
export const query = graphql`
  query CategoryQuery($category: String!) {
    source: allOrangeCountyYaml(filter: {category: { eq: $category }}) {
      resources: nodes {
        id
        category
        title
        desc
        phone {
          desc
          number
        }
        website
        email
        hours
        address
      }
    }
    sidebarData: allOrangeCountyYaml(filter: {title: {ne: null}}) {
      group(field: category) {
        category: fieldValue
        resources: nodes {
          title
          id
        }
      }
    }
  }
`;

// Defaults values for props, required by eslint
CategoryPage.defaultProps = {
  data: {
    source: {
      resources: [{
        address: 'address',
        category: 'category',
        phone: [{ desc: 'desc', number: '(555) 555-5555' }],
        title: 'title',
        desc: 'desc',
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
  },
};


// Proptype validation, required by eslint
CategoryPage.propTypes = {
  data: PropTypes.shape({
    source: PropTypes.shape({
      resources: PropTypes.arrayOf(
        PropTypes.shape({
          address: PropTypes.string,
          category: PropTypes.string,
          phone: PropTypes.arrayOf(
            PropTypes.shape({
              desc: PropTypes.string,
              number: PropTypes.string,
            }),
          ),
          title: PropTypes.string,
          desc: PropTypes.string,
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
  pageContext: {
    category: PropTypes.string,
  },
};

export default CategoryPage;
