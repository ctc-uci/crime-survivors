import React from 'react';
import PropTypes from 'prop-types';
// import Sidebar from './sidebar';

// TODO
// make pagecontainer.css

const PageContainer = ({ children }) => {
  // not using the Header Component that came with Gatsby for Page Container because
  // its hardcoded to use Link which only navs to internal pages
  // eventually replace Header with Nav Bar ?
  // const styles = {
  //   display: 'flex',
  //   backgroundColor: 'yellow', // yellow just for fun
  //   textAlign: 'center',
  //   justifyContent: 'left',
  //   flexDirection: 'column',
  //   width: '15%',
  // };

  return (
    <>
      <header>
        <h1>
          <a href="https://crimesurvivors.org/">Head Back to The Main Page</a>
        </h1>
      </header>
      {/* <div style={styles}>
        <Sidebar resources={children} />
      </div> */}
      <div>
        <main>{children}</main>
      </div>
      <footer>
        <hr />
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Victims of Crime Resource Center. All Rights Reserved.
        <br />
        Please Read: Put Link to Terms of Use Here Page When Built Later.
      </footer>
    </>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
