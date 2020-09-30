import React from 'react';
import { graphql } from 'gatsby';
import { CategoryPageProps, CategoryPagePropsDefaultProps } from './CategoryPage.interface';
import Layout from '../components/layout/Layout';
import CategoryContent from '../components/categoryContent/CategoryContent';
import Navbar from '../components/navbar/Navbar';
import LeftSidebar from '../components/dualSidebar/leftSidebar/LeftSidebar';
import RightSidebar from '../components/dualSidebar/rightSidebar/RightSidebar';

const CategoryPage: React.FC<CategoryPageProps> = ({ pageContext, data }) => {
  const { categoryData, sidebarData, rightSidebarData } = data;
  const { category, location } = pageContext;

  return (
    <Layout
      header={<Navbar location={{ pathname: '/' }} />}
      content={(
        <CategoryContent
          categoryData={categoryData}
          category={category}
          location={location}
        />
      )}
      enableLeftSidebar
      leftSidebar={<LeftSidebar sidebarData={sidebarData} location={location} title={location} />}
      enableRightSidebar
      rightSidebar={<RightSidebar category={category} resources={rightSidebarData} />}
    />
  );
};

export const query = graphql`
  query CategoryQuery($category: String!, $location: String!) {
    categoryData: allContentfulResource(
      filter: { category: { eq: $category }, location: { eq: $location } }
    ) {
      nodes {
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
        nodes {
          id
          title
        }
        category: fieldValue
      }
    }
    rightSidebarData: allContentfulResource(
      filter: { category: { eq: $category }, location: { eq: $location } }
    ) {
      nodes {
        title
      }
    }
  }
`;

CategoryPage.defaultProps = CategoryPagePropsDefaultProps;

export default CategoryPage;
