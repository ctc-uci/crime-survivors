import React, { FunctionComponent } from 'react';
import { Menu, PageHeader } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'gatsby';

import { SidebarData, SidebarDataDefaultProps } from '../../../common/interfaces/global.interfaces';
import 'antd/dist/antd.css';
import './left-sidebar.scss';
import { pathify } from '../../../common/utils/commonUtils';

const { SubMenu } = Menu;

interface LeftSidebarProps {
  location: string,
  sidebarData: SidebarData
}

const defaultProps: LeftSidebarProps = {
  location: 'string',
  sidebarData: SidebarDataDefaultProps,
};

const LeftSidebar: FunctionComponent<LeftSidebarProps> = ({ sidebarData, location }) => (
  <div>
    <Menu className="left-sidebar" mode="inline">
    <PageHeader title={location} />

      {sidebarData.group.map((obj) => (
        <SubMenu className="test" title={obj.category}>
          {obj.nodes.map((resource) => (
            <Menu.Item key={uuidv4()}>
              <Link to={pathify([location, obj.category], resource.title, false, false)}>
                {resource.title}
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  </div>
);

LeftSidebar.defaultProps = defaultProps;

export default LeftSidebar;
