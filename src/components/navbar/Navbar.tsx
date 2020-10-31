import React from 'react';
import { Link as SmoothLink } from 'react-scroll';
import { Link } from 'gatsby';
import { v4 } from 'uuid';
import './navbar.scss';

import logo from '../../common/media/CrimeSurvivorsLogo.svg';
import { pathify } from '../../common/utils/commonUtils';
import { UrlRouter } from '../../common/interfaces/global.interfaces';
import {
  HOME_PATH_PREFIX,
  GUIDES_PATH_PREFIX,
  FIND_COUNTY_SECTION_ID,
  CONTACT_PATH_PREFIX,
  DONATE_PATH,
} from '../../common/utils/constants';

const options = [
  {
    displayName: 'Home',
    path: HOME_PATH_PREFIX,
    smooth: false,
    absolute: false,
  },
  {
    displayName: 'Find Your County',
    path: FIND_COUNTY_SECTION_ID,
    smooth: true,
    absolute: false,
  },
  {
    displayName: 'General Guides',
    path: GUIDES_PATH_PREFIX,
    smooth: false,
    absolute: false,
  },
  {
    displayName: 'Contact Us',
    path: CONTACT_PATH_PREFIX,
    smooth: false,
    absolute: true,
  },
];

const DonateButton: React.FC = () => (
  <a target="_blank" rel="noreferrer" href={DONATE_PATH} id="donate-button">
    Donate
  </a>
);

interface NavbarPropType {
  location: UrlRouter
}

const Navbar: React.FC<NavbarPropType> = () => {
  const getLinkType = (smooth: boolean, absolute: boolean, path: string, displayName: string) => {
    if (smooth) {
      return (
        <SmoothLink
          className="nav-item nav-link"
          smooth
          offset={-40}
          duration={400}
          to={path}
        >
          {displayName}
        </SmoothLink>
      );
    }
    if (absolute) {
      return (
        <a className="nav-link" target="_blank" rel="noreferrer" href={path}>
          {displayName}
        </a>
      );
    }
    return (
      <Link
        className="nav-item nav-link"
        to={pathify([path])}
      >
        {displayName}
      </Link>
    );
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="cs-logo" />
        <div>
          <div className="organization">Crime Survivors</div>
          Resource Guides
        </div>
        <div className="reveal-mobile" style={{ marginLeft: 'auto' }}>
          <DonateButton />
        </div>
      </div>
      <div className="menu">
        {options.map(({
          smooth, absolute, path, displayName,
        }) => (
          <div key={v4()} className="menu-item">
            {getLinkType(smooth, absolute, path, displayName)}
          </div>
        ))}
        <div className="reveal-desktop">
          <DonateButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
