/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PageContainer from '../components/pagecontainer';
import GuideBody from '../components/GuideBody';
import Sidebar from '../components/sidebar/sidebar';
import GuideSidebarContent from '../components/sidebar/content/guideSidebarContent';

const GuidePage = ({ data }) => {
  const { contentfulGuide, sidebarData } = data;
  return (
    <PageContainer
      sidebar={(
        <Sidebar
          title="General Guide"
          content={<GuideSidebarContent content={sidebarData} />}
        />
    )}
      body={<GuideBody contentfulGuide={contentfulGuide} />}
    />
  );
};

export const query = graphql`
  query GuideQuery($title: String!) {
    contentfulGuide(title: {eq: $title}) {
      title
      generalDescription {
        generalDescription
      }
      guideSections {
        content {
          content
        }
      }
    }
    sidebarData: allContentfulGuide {
      nodes {
        title
      }
    }
  }  
`;

// Defaults values for props, required by eslint
GuidePage.defaultProps = {
  data: {
    contentfulGuide: {
      title: 'title',
      generalDescription: {
        generalDescription: 'general Description',
      },
      guideSections: [{
        content: {
          content: 'contentful content',
        },
      }],
    },
  },
};

// // Proptype validation, required by eslint
GuidePage.propTypes = {
  data: PropTypes.shape({
    contentfulGuide: PropTypes.shape({
      title: PropTypes.string,
      generalDescription: PropTypes.shape({
        generalDescription: PropTypes.string,
      }),
      guideSections: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.shape({
            content: PropTypes.string,
          }),
        }),
      ),
    }),
  }),
};

export default GuidePage;