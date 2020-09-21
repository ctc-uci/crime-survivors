import React from 'react';
import { v4 } from 'uuid';
import './navbar.scss';

import logo from '../../common/media/CrimeSurvivorsLogo.svg';

const options = [
  {
    displayName: 'Home',
    path: '/',
  },
  {
    displayName: 'Find Your County',
    path: '/location',
  },
  {
    displayName: 'General Guides',
    path: '/guides',
  },
  {
    displayName: 'Contact Us',
    path: '/contact',
  },
];

interface NavbarPropType {
  location: {
    pathname: string
  }
}

const Navbar: React.FC<NavbarPropType> = ({ location }) => (
  <div className="navbar">
    <div className="logo">
      <img src={logo} alt="cs-logo" />
      <div>
        <div className="organization">Crime Survivors</div>
        Resource Guides
      </div>
    </div>
    <div className="menu">
      { options.map(({ path, displayName }) => {
        const mark = location.pathname.includes(path) ? 'selected' : '' ;
        return (
          <div key={v4()} className={`menu-item ${mark}`}>
            <a className={`nav-item ${mark}`} href={path}>
              {displayName}
            </a>
          </div>
        );
      })}
    </div>
  </div>
);

export default Navbar;
