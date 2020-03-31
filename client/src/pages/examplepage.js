import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import ExampleReactFunctional from '../components/ExampleReactFunctional';
import ExampleReactStateful from '../components/ExampleReactStateful';

const ExamplePage = ({ data }) => {
  // deconstruct props, required by eslint
  const { allOrangeCountyYaml } = data;
  const { nodes } = allOrangeCountyYaml;

  return (
    <div>
      <h1>Functional Components</h1>
      {nodes.map((node) => (
        <div key={uuidv4() /* uuid bc array of items */}>
          <ExampleReactFunctional resource={node} />
          <hr />
        </div>
      ))}
      <h1>Stateful Components</h1>
      {nodes.map((node) => (
        <div key={uuidv4() /* uuid bc array of items */}>
          <ExampleReactStateful resource={node} />
          <hr />
        </div>
      ))}
    </div>
  );
};

// Defaults values for props, required by eslint
ExamplePage.defaultProps = {
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
ExamplePage.propTypes = {
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

// Standard GraphQL query for YAML, play around with graphql on localhost:8000/__graphql
export const query = graphql`
  query MyQuery {
    allOrangeCountyYaml {
      nodes {
        address
        category
        phone {
          desc
          number
        }
        title
        desc
      }
    }
  }
`;

export default ExamplePage;
