import { UrlRouter, UrlRouterDefaultProps } from '../common/interfaces/global.interfaces';

export interface CountyPageProps{
  pageContext:{
    location: string,
  },
  data: CountyPageData,
  location: UrlRouter,
}

export interface CountyPageData {
  featuredSection: FeaturedSection,
  sidebarData: CountyPageSidebar,
  quotes: Quotes
}

export interface FeaturedSection {
  group: {
    nodes: {
      title: string,
    }[]
  }[]
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

export interface CountyPageSidebar{
  group: {
    category: string,
    nodes: {
      id: string,
      title: string, }[]
  }[]
}

export const CountyPageDefaultProps: CountyPageProps = {
  pageContext: {
    location: 'string',
  },
  data: {
    featuredSection: {
      group: [{
        nodes: [{
          title: 'string',
        }],
      }],
    },
    sidebarData: {
      group: [{
        category: 'string',
        nodes: [{
          id: 'string',
          title: 'string',
        }],
      }],
    },
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
