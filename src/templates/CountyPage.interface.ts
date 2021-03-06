import {
  UrlRouter, UrlRouterDefaultProps, SidebarData, SidebarDataDefaultProps,
} from '../common/interfaces/global.interfaces';

export interface CountyPageProps{
  pageContext:{
    location: string,
  },
  data: CountyPageData,
  location: UrlRouter,
}

export interface CountyPageData {
  featuredCategories: FeaturedCategories,
  sidebarData: SidebarData,
  quotes: Quotes
}

export interface FeaturedCategories {
  group: {
    fieldValue: string;
    nodes: {
      title: string;
    }[];
  }[];
}

export interface Quotes {
  nodes: {
    author: string,
    organization: string,
    quote: {
      quote: string
    }
  }[]
}

export const CountyPageDefaultProps: CountyPageProps = {
  pageContext: {
    location: 'string',
  },
  data: {
    featuredCategories: {
      group: [{
        fieldValue: 'string',
        nodes: [{
          title: 'string',
        }],
      }],
    },
    sidebarData: SidebarDataDefaultProps,
    quotes: {
      nodes: [{
        author: 'string',
        organization: 'string',
        quote: {
          quote: 'string',
        },
      }],
    },
  },
  location: UrlRouterDefaultProps,
};
