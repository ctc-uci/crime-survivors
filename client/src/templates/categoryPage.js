import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import PageContainer from '../components/pagecontainer';

const CategoryPage = ({ data }) => {
  const { allOrangeCountyYaml } = data;
  const { nodes } = allOrangeCountyYaml;

  // simply displays all resources for this category in an ugly list
  return (
    <PageContainer>
      {nodes.map((resource) => (
        <div key={uuidv4() /* uuid bc array of items */}>
          <h1>{resource.title}</h1>
          <div>{resource.desc}</div>
        </div>
      ))}
    </PageContainer>
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
};

export default CategoryPage;
