import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PageContainer from '../components/pagecontainer';
import ResourceBody from '../components/ResourceBody';
import Sidebar from '../components/sidebar';

const ResourcePage = ({ data }) => {
  const { source, sidebarData } = data;
  const { resources } = source;

  // since we're filtering on index,
  // there should only be 1 resource returned in the array so we want nodes[0]
  const resource = resources[0];

  return (
    <PageContainer
      sidebar={(
        <Sidebar props={{ sidebarData, resourceId: resource.id, category: resource.category }} />
      )}
      body={<ResourceBody props={resource} />}
    />
  );
};

// we can query the needed resource according to the id passed in the
// context property of createPage() in gatsby-node.js
export const query = graphql`
  query ResourceQuery($id: String!) {
    source: allOrangeCountyYaml(filter: {id: {eq: $id}}) {
      resources: nodes{
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
ResourcePage.defaultProps = {
  data: {
    source: {
      resources: [{
        id: 'id',
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
        category: 'fieldValue',
        resources: [
          {
            title: 'title',
            id: 'id',
          },
        ],
      }],
    },
  },
};


// Proptype validation, required by eslint
ResourcePage.propTypes = {
  data: PropTypes.shape({
    source: PropTypes.shape({
      resources: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
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
          nodes: PropTypes.arrayOf(
            {
              title: PropTypes.string,
              id: PropTypes.string,
            },
          ),
        }),
      ),
    }),
  }),
};

export default ResourcePage;
