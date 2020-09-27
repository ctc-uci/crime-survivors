import {
  UrlRouter, UrlRouterDefaultProps, SidebarData, SidebarDataDefaultProps,
} from '../common/interfaces/global.interfaces';

export interface GuidePageProps{
  pageContext: {
    category: string,
  },
  data: GuidePageData,
  location: UrlRouter
}

export interface GuidePageData{
  guideData: GuidePageContent,
  sidebarData: SidebarData
}

export interface GuidePageContent {
  nodes: {
    title: string,
    content: {
      content: string
    }
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
    sidebarData: SidebarDataDefaultProps,
  },
  location: UrlRouterDefaultProps,
};
