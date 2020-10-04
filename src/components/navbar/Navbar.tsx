import React from 'react';
import { v4 } from 'uuid';
import './navbar.scss';

import logo from '../../common/media/CrimeSurvivorsLogo.svg';
import { UrlRouter } from '../../common/interfaces/global.interfaces';

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
    path: '/guide',
  },
  {
    displayName: 'Contact Us',
    path: '/contact',
  },
];

function pathMatches(currentPath: string, candidate: string): boolean {
  const candidateLen = candidate.length;
  return currentPath === candidate
         || (candidateLen > 1 && currentPath.slice(0, candidateLen) === candidate);
}

interface NavbarPropType {
  location: UrlRouter;
}

const Navbar: React.FC<NavbarPropType> = ({ location: url }) => (
  <div className="navbar">
    <div className="logo">
      <img src={logo} alt="cs-logo" />
      <div>
        <div className="organization">Crime Survivors</div>
        Resource Guides
      </div>
    </div>
    <div className="menu">
      {options.map(({ path, displayName }) => {
        const mark = pathMatches(url.pathname, path) ? 'selected' : '';
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
