import React from 'react';
import { Link } from 'gatsby';
import { pathify } from '../../../utils/commonUtils';
import './guide.css';

function Guide() {
  return (
    <div>
      <Link to={pathify(['guidesOverview'])}>
        <button
          type="button"
          className="sidebar-guide"
        >
          {'> Overview'}
        </button>
      </Link>
    </div>
  );
}

export default Guide;
