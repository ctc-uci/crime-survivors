import React from 'react';
import Layout from '../layout/Layout';
import Navbar from '../navbar/navbar';

const Header = () => <div style={{ backgroundColor: 'purple' }}><Navbar location={{ pathname: '/home' }} /></div>;
const Context = () => <div style={{ backgroundColor: 'blue' }}><h1>Content</h1></div>;
const Footer = () => <div style={{ backgroundColor: 'red' }}><h1>Footer</h1></div>;

const LandingPage = () => (
  <Layout
    header={Header()}
    content={Context()}
    footer={Footer()}
    enableLeftSidebar
    enableRightSidebar
  />
);

export default LandingPage;
