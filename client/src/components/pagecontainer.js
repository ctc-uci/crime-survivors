import React from 'react';
import PropTypes from 'prop-types';

import EscapeButton from './escape/escapeButton';
import Footer from './footer/Footer';


// TODO
// make pagecontainer.css

const PageContainer = ({ sidebar, body }) => {
  // not using the Header Component that came with Gatsby for Page Container because
  // its hardcoded to use Link which only navs to internal pages
  // eventually replace Header with Nav Bar ?
  const styles = {
    container: {
      display: 'flex',
    },

    sidebar: {
      // backgroundColor: '#f8f8ff', // gray just for fun
      // textAlign: 'center',
      // justifyContent: 'left',
      // flexDirection: 'column',
      width: '300px',
      // flex: '0.2',
      // overflow: 'scroll',
      // height: '100vh', // TODO better solution
    },

    main: {
      // backgroundColor: '#f8f8ff', // just for fun
      textAlign: 'center',
      flexDirection: 'column',
      flex: '1',
    },
  };

  return (
    <>
      <EscapeButton />
      {/* <header>
      </header> */}
      <div style={styles.container}>
        <div style={styles.sidebar}>
          {sidebar}
        </div>
        <div style={styles.main}>
          <main>{body}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

PageContainer.propTypes = {
  sidebar: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
};

export default PageContainer;
