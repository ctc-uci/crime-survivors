export interface UrlRouter{
  hash: string,
  host: string,
  hostname: string,
  href: string,
  key: string,
  origin: string,
  pathname: string,
  port: string,
  protocol: string,
  search: string,
  state: {
    key: string,
  }
}

export const UrlRouterDefaultProps: UrlRouter = {
  hash: 'string',
  host: 'string',
  hostname: 'string',
  href: 'string',
  key: 'string',
  origin: 'string',
  pathname: 'string',
  port: 'string',
  protocol: 'string',
  search: 'string',
  state: {
    key: 'string',
  },
};

export interface SidebarData{
  group: {
    category: string,
    nodes: {
      title: string
    }[]
  }[]
}

export const SidebarDataDefaultProps: SidebarData = {
  group: [{
    category: 'string',
    nodes: [{
      title: 'string',
    }],
  }],
};
