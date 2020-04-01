import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const ResourcePage = ({ data }) => {
  const { allOrangeCountyYaml } = data;
  const { nodes } = allOrangeCountyYaml;

  // since we're filtering on index,
  // there should only be 1 resource returned in the array so we want nodes[0]
  const resource = nodes[0];

  return (
    <div>
      <h1>{resource.title}</h1>
      <div>{resource.desc}</div>
    </div>
  );
};

// we can query the needed resource according to the id passed in the
// context property of createPage() in gatsby-node.js
export const query = graphql`
  query ResourceQuery($id: String!) {
    allOrangeCountyYaml(filter: {id: { eq: $id }}) {
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
ResourcePage.defaultProps = {
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
ResourcePage.propTypes = {
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

export default ResourcePage;
