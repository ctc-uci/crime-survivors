import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar/navbar';
import EscapeButton from './escape/escapeButton';
import Footer from './footer/Footer';
import './pagecontainer.css';

// not using the Header Component that came with Gatsby for Page Container because
// its hardcoded to use Link which only navs to internal pages
// eventually replace Header with Nav Bar ?
// const fullScreenSidebar = true;

const PageContainer = ({ sidebar, body }) => (
  <>
    <EscapeButton />
    <div className="content">
      {sidebar}
      <div className="main-container">
        <Navbar />
        <div>
          <main>{body}</main>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
PageContainer.propTypes = {
  sidebar: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
};

export default PageContainer;
