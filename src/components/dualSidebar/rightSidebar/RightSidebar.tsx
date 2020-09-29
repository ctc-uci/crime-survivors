import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-scroll';

import './right-sidebar.scss';
import { RightSidebarData } from '../../../common/interfaces/global.interfaces';
import { urlEncode } from '../../../common/utils/commonUtils';

interface RightSidebarProps {
  category: string,
  resources: RightSidebarData
}

const RightSidebar = ({ category, resources }: RightSidebarProps) => (
  <div className="right-sidebar">
    <div className="divider" />
    <div className="sidebar-elements">
      <div className="right-sidebar-subtitle">
        {category}
      </div>
      {resources.nodes.map(({ title }) => (
        <Link
          key={uuidv4()}
          activeClass="active"
          className="sidebar-link"
          to={urlEncode(title)}
          spy
          smooth
          offset={-40}
          duration={400}
        >
          {title}
        </Link>
      ))}
    </div>
  </div>
);

export default RightSidebar;
