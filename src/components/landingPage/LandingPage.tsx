import React from 'react';
import { UrlRouter } from '../../common/interfaces/global.interfaces';
import Layout from '../layout/Layout';

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

const LandingPage: React.FC<LandingPageProps> = ({}) => (
  <Layout
    header={<div> </div>}
    content={<></>}
    enableLeftSidebar
    enableRightSidebar
  />
);

interface LandingPageProps {
  location: UrlRouter
}

export default LandingPage;
