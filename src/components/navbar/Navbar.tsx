import React from 'react';
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
  GOOGLE_FORM_PATH,
} from '../../common/utils/constants';

const options = [
  {
    displayName: 'Home',
    path: HOME_PATH_PREFIX,
    hash: '',
    absolute: false,
  },
  {
    displayName: 'Find Your County',
    path: '',
    hash: `${FIND_COUNTY_SECTION_ID}`,
    absolute: false,
  },
  {
    displayName: 'General Guides',
    path: GUIDES_PATH_PREFIX,
    hash: '',
    absolute: false,
  },
  {
    displayName: 'Contact Us',
    path: CONTACT_PATH_PREFIX,
    hash: '',
    absolute: true,
  },
  {
    displayName: 'Add Your Organization Here',
    path: GOOGLE_FORM_PATH,
    hash: '',
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

const Navbar: React.FC<NavbarPropType> = ({ location: url }) => (
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
        path, hash, displayName, absolute,
      }) => (
        <div key={v4()} className="menu-item">
          {absolute ? (
            <a className="nav-link" target="_blank" rel="noreferrer" href={path}>
              {displayName}
            </a>
          ) : (
            <Link
              className="nav-item nav-link"
              to={pathify([path], hash)}
            >
              {displayName}
            </Link>
          )}
        </div>
      ))}
      <div className="reveal-desktop">
        <DonateButton />
      </div>
    </div>
  </div>
);

export default Navbar;
