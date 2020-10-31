import React, { useState, useEffect } from 'react';
import { Menu, PageHeader } from 'antd';

import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'gatsby';
import { useWindowWidth } from '@react-hook/window-size';

import {
  SidebarData,
  SidebarDataDefaultProps,
} from '../../../common/interfaces/global.interfaces';
import 'antd/dist/antd.css';
import './left-sidebar.scss';
import { pathify } from '../../../common/utils/commonUtils';
import { MOBILE_WIDTH } from '../../../common/utils/constants';

const { SubMenu } = Menu;

interface LeftSidebarProps {
  location: string
  title: string
  sidebarData: SidebarData
}

const defaultProps: LeftSidebarProps = {
  location: 'string',
  title: 'Menu',
  sidebarData: SidebarDataDefaultProps,
};

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  sidebarData,
  location,
  title,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentWidth = useWindowWidth();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`current width = ${currentWidth}`);
    console.log(MOBILE_WIDTH);
  });

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const mobileWidth = MOBILE_WIDTH;
  const selectedMenuIcon = mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />;

  return (
    <div className="left-sidebar">
      <Menu
        className={`${mobileMenuOpen ? 'is-overlay' : null}`}
        mode="inline"
      >
        <PageHeader
          // utilizing backIcon built-in prop but overriding the callback to simply open/close menu
          backIcon={currentWidth <= mobileWidth ? selectedMenuIcon : false}
          onBack={() => {
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          title={title}
        />
        {sidebarData.group.map((obj) => (
          <SubMenu
            className={mobileMenuOpen || currentWidth > mobileWidth ? 'show' : 'hide'}
            title={obj.category}
          >
            {obj.nodes.map((resource) => (
              <Menu.Item key={uuidv4()}>
                <Link
                  onClick={handleClick}
                  to={pathify(
                    [location, obj.category],
                    resource.title,
                  )}
                  state={mobileMenuOpen}
                >
                  {resource.title}
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </div>
  );
};

LeftSidebar.defaultProps = defaultProps;

export default LeftSidebar;
