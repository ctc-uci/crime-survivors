import React from 'react';
import { Link } from 'gatsby';

import './Navbar.css';

const Navbar = () => (
  <div className="nav-bar">
    <h1>
      <Link to="/">Head back to the Landing Page</Link>
    </h1>
    <h1>
      {' '}
      <a href="https://crimesurvivors.org/">Head back to the Main Page</a>
    </h1>
  </div>
);

export default Navbar;
