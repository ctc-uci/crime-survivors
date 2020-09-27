import React, { FunctionComponent } from 'react';
import { Menu } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { SidebarData, SidebarDataDefaultProps } from '../../../common/interfaces/global.interfaces';
import 'antd/dist/antd.css';
import './left-sidebar.scss';

const { SubMenu } = Menu;

interface LeftSidebarProps {
  sidebarData: SidebarData
}

const defaultProps: LeftSidebarProps = {
  sidebarData: SidebarDataDefaultProps,
};

const LeftSidebar: FunctionComponent<LeftSidebarProps> = ({ sidebarData }) => (
  <Menu className="left-sidebar" mode="inline">
    {sidebarData.group.map((obj) => (
      <SubMenu className="test" title={obj.category}>
        {obj.nodes.map((resource) => (
          <Menu.Item key={uuidv4()}>{resource.title}</Menu.Item>
        ))}
      </SubMenu>
    ))}
  </Menu>
);

LeftSidebar.defaultProps = defaultProps;

export default LeftSidebar;
