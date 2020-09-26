import { UrlRouter, UrlRouterDefaultProps } from '../common/interfaces/global.interfaces';

export interface GuidePageProps{
  pageContext: {
    category: string,
  },
  data: GuidePageData,
  location: UrlRouter
}

export interface GuidePageData{
  guideData: GuidePageContent,
  sidebarData: GuideSidebar
}

export interface GuidePageContent {
  nodes: {
    title: string,
    content: {
      content: string
    }
  }[]
}

export interface GuideSidebar{
  group: {
    category: string,
    nodes: [{
      id: string,
      title: string, }]
  }[]
}

export const GuidePageDefaultProps: GuidePageProps = {
  pageContext: {
    category: 'string',
  },
  data: {
    guideData: {
      nodes: [{
        title: 'string',
        content: {
          content: 'string',
        },
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
  },
  location: UrlRouterDefaultProps,
};
