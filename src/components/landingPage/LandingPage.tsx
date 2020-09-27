import React from 'react';
import { UrlRouter } from '../../common/interfaces/global.interfaces';
import Layout from '../layout/Layout';
import Carousel from '../carousel/carousel';
import Navbar from '../navbar/navbar';

function genItem(num: number) {
  return {
    title: `${num}`,
    body: `${num} DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION`,
    link: '',
    index: num,
  };
}
const items: {
  title: string;
  body: string;
  link: string;
  index: number;
}[] = [];
for (let i = 0; i < 5; i += 1) {
  items.push(genItem(i));
}

const Header = () => <div style={{ backgroundColor: 'purple' }}><Navbar location={{ pathname: '/home' }} /></div>;
const Footer = () => <div style={{ backgroundColor: 'red' }}><h1>Footer</h1></div>;

const LandingPage: React.FC<LandingPageProps> = ({ location: url }) => (
  <Layout
    header={Header()}
    content={<Carousel location={url} items={items} />}
    footer={Footer()}
    enableLeftSidebar
    enableRightSidebar
  />
);

interface LandingPageProps {
  location: UrlRouter
}

export default LandingPage;
