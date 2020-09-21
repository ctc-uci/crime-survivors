/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import GuideContent from '../components/guideContent/GuideContent';
import Navbar from '../components/navbar/navbar';

// TODO THIS ESLINT DISABLE IS TEMPORARY
/* eslint-disable no-unused-vars */

const GuidePage = ({ data, pageContext }) => {
  const { generalGuide, generalGuideSidebar } = data;
  const { category } = pageContext;

  return (
    <Layout
      header={<Navbar location={{ pathname: '/guides' }} />}
      content={<GuideContent generalGuide={generalGuide} category={category} />}
      enableLeftSidebar
      enableRightSidebar
    />
  );
};

/* eslint-enable no-unused-vars */

export const query = graphql`
  query GuideQuery($category: String!) {
    generalGuide: allContentfulGeneralGuide(filter: {category: {eq: $category}}) {
      nodes {
        title: identifier
        content {
          content
        }
      }
    }
    generalGuideSidebar: allContentfulGeneralGuide {
      group(field: category) {
        category: fieldValue
        nodes {
          title: identifier
        }
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
