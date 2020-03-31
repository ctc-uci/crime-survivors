import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'gatsby';

// import Header from './header';

// TODO 
// make pagecontainer.css

const PageContainer = ({props}) => {
  return (
    // not using the Header Component that came with Gatsby for Page Container because
    // its hardcoded to use Link which only navs to internal pages
    // eventually replace Header with Nav Bar ?
    <>
      <header>
          <div>
              <h1>
                  <a href="https://crimesurvivors.org/">Head Back to the Main Page</a>
              </h1>
          </div>
      </header>
      <div>
          <main>{props}</main>
      </div>
      <footer>
          ©
          {' '}
          {new Date().getFullYear()}
          Victims of Crime Resource Center. All Rights Reserved.
          <br></br>
          Please Read: Put Link to Terms of Use Here Page When Built Later.
        </footer>
    </>
  );
};

export default PageContainer;