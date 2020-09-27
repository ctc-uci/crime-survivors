import React from 'react';
import { Link } from 'react-scroll';

import './right-sidebar.scss';

const { urlEncode } = require('../../../common/utils/commonUtils');

interface RightSidebarProps {
  category: string,
  resources: string[],
}

const RightSidebar = ({ category, resources }: RightSidebarProps) => (
  <div className="right-sidebar">
    <div className="divider" />
    <div className="sidebar-elements">
      <div className="right-sidebar-subtitle">
        {category}
      </div>
      {resources.map((element: string) => (
        <Link
          activeClass="active"
          className="sidebar-link"
          to={urlEncode(element)}
          spy
          smooth
          offset={-140}
          duration={400}
        >
          {element}
        </Link>
      ))}
    </div>
  </div>
);

export default RightSidebar;
