import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/pagecontainer';
import CategoryBody from '../components/CategoryBody/CategoryBody';
import Sidebar from '../components/sidebar/sidebar';
import CategorySidebarContent from '../components/sidebar/content/categorySidebarContent';
import { ResourcePropType } from '../components/CategoryBody/interfaces';
import { defaultResourceProp } from '../components/CategoryBody/Resource/Resource';

interface LocationPropType {
  hash: string
  host: string
  hostname: string
  href: string
  key: string
  origin: string
  pathname: string
  port: string
  protocol: string
  search: string
  state: string
}

interface CategoryPagePropType {
  data: {
    source: {
      resources: ResourcePropType[]
    }
    sidebarData: {
      group: {
        category: string
        resources: {
          title: string
          id: string
        }[]
      }[]
    }
  }
  pageContext: {
    category: ResourcePropType['category']
    location: ResourcePropType['location']
  }
  location: LocationPropType
}

// Defaults values for props, required by eslint

const CategoryPage: React.FC<CategoryPagePropType> = ({ data, pageContext, location: url }) => {
  const { source, sidebarData } = data;
  const { resources } = source;
  const { category, location } = pageContext;

  return (
    <PageContainer
      sidebar={(
        <Sidebar
          title={location}
          content={<CategorySidebarContent url={url} content={sidebarData} resourceId="" selecedCategory={category} location={location} />}
        />
      )}
      body={<CategoryBody resources={resources} />}
    />
  );
};
CategoryPage.defaultProps = {
  data: {
    source: {
      resources: [defaultResourceProp],
    },
    sidebarData: {
      group: [{
        category: defaultResourceProp.category,
        resources: [
          {
            title: defaultResourceProp.title,
            id: 'id',
          },
        ],
      }],
    },
  },
  pageContext: {
    category: defaultResourceProp.category,
    location: defaultResourceProp.location,
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    key: '',
    origin: '',
    pathname: '',
    port: '',
    protocol: '',
    search: '',
    state: '',
  },
};

export const query = graphql`
  query CategoryQuery($category: String!, $location: String!) {
    source: allContentfulResource(
      filter: { category: { eq: $category }, location: { eq: $location } }
    ) {
      resources: nodes {
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
        resources: nodes {
          id
          title
        }
        category: fieldValue
      }
    }
  }
`;

export default CategoryPage;
