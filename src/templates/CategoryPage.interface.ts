import {
  UrlRouter, UrlRouterDefaultProps,
  SidebarData, SidebarDataDefaultProps,
  RightSidebarData, RightSidebarDataDefaultProps,
} from '../common/interfaces/global.interfaces';

export interface CategoryPageProps{
  pageContext: {
    category: string,
    location: string,
  },
  data: CategoryPageData,
  location: UrlRouter
}

export interface CategoryPageData{
  categoryData: CategoryPageContent,
  sidebarData: SidebarData,
  rightSidebarData: RightSidebarData
}

export interface CategoryPageContent{
  nodes: ResourceContent[]
}

export interface ResourceContent {
  id: string,
  location: string,
  title: string,
  address: string,
  category: string,
  phone: {
    desc: string,
    number: string,
  }[],
  desc: {
    desc: string
  },
  website: string,
  email: string,
}

export interface CategoryPageSidebar{
  group: {
    category: string,
    nodes: {
      id: string,
      title: string, }[]
  }[]
}

export const CategoryPagePropsDefaultProps: CategoryPageProps = {
  pageContext: {
    category: 'string',
    location: 'string',
  },
  data: {
    categoryData: {
      nodes: [{
        id: 'string',
        location: 'string',
        title: 'string',
        address: 'string',
        category: 'string',
        phone: [{
          desc: 'string',
          number: 'string',
        }],
        desc: {
          desc: 'string',
        },
        website: 'string',
        email: 'string',
      }],
    },
    sidebarData: SidebarDataDefaultProps,
    rightSidebarData: RightSidebarDataDefaultProps,
  },
  location: UrlRouterDefaultProps,
};
