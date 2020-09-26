import React from 'react';
import { graphql } from 'gatsby';
import { CategoryPageProps, CategoryPagePropsDefaultProps } from './CategoryPage.interface';

const CategoryPage: React.FC<CategoryPageProps> = ({ pageContext, data, location: url }) => {
  const { categoryData, sidebarData } = data;
  const { nodes } = categoryData;
  const { category, location } = pageContext;

  console.log('1', nodes);
  console.log('2', sidebarData.group);
  console.log('3', category, location);
  console.log('4', url);

  return (
    <div />
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
  }
`;

CategoryPage.defaultProps = CategoryPagePropsDefaultProps;

export default CategoryPage;
