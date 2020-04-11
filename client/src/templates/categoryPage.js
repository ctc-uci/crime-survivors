import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PageContainer from '../components/pagecontainer';
import CategoryBody from '../components/CategoryBody';
import Sidebar from '../components/sidebar';

const CategoryPage = ({ data, pageContext }) => {
  const { allOrangeCountyYaml } = data;
  const { nodes } = allOrangeCountyYaml;

  // console.log(nodes);
  // console.log(pageContext);

  // simply displays all resources for this category in an ugly list
  return (
    <PageContainer
      sidebar={<Sidebar props={{ resourceId: '', category: pageContext.category }} />}
      body={<CategoryBody props={nodes} />}
    />
  );
};

// we can query the needed resources according to the category passed in the
// context property of createPage() in gatsby-node.js
export const query = graphql`
  query CategoryQuery($category: String!) {
    allOrangeCountyYaml(filter: {category: { eq: $category }}) {
      nodes {
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
  }
`;

// Defaults values for props, required by eslint
CategoryPage.defaultProps = {
  data: {
    allOrangeCountyYaml: {
      nodes: [{
        address: 'address',
        category: 'category',
        phone: [{ desc: 'desc', number: '(555) 555-5555' }],
        title: 'title',
        desc: 'desc',
      },
      ],
    },
  },
  pageContext: {
    category: 'category',
  },
};


// Proptype validation, required by eslint
CategoryPage.propTypes = {
  data: PropTypes.shape({
    allOrangeCountyYaml: PropTypes.shape({
      nodes: PropTypes.arrayOf(
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
  }),
  pageContext: {
    category: PropTypes.string,
  },
};

export default CategoryPage;
