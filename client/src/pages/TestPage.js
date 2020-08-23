import React from 'react';
// import { withWindowSize } from 'react-fns';
import {
  Layout, Button,
} from 'antd';
import '../styles/test-page.css';
import 'antd/dist/antd.css';
import TopImage from '../images/TestPage_topimage.png';
import CheveronGreen from '../images/TestPage_chevrongreen.png';

const { Header, Content, Footer } = Layout;

const Logo = () => (
  <div style={{ float: 'left', margin: '16px 24px 16px 0' }}>
    <h3 style={{ color: 'black' }}>Crime Survivors</h3>
  </div>
);

const HeaderCustom = () => (
  <Header style={{ background: 'white' }}>
    <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
        {Logo()}
      </div>
      <div style={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' }}>
        <Button className="menu-button">Home</Button>
        <Button className="menu-button">Find Your Country</Button>
        <Button className="menu-button">General Guides</Button>
        <Button className="menu-button" style={{ background: '#00474F', borderColor: '#00474F', color: 'white' }} type="primary">Contact Us</Button>
      </div>
    </div>
  </Header>
);

// const HeaderRCMenu = (width) => (
//   <Header style={{ background: 'white' }}>
//     { Logo() }
//     <Menu theme="dark" mode="horizontal" style={{ width: `${width - 250}px` }}>
//       <Menu.Item key="1">Home</Menu.Item>
//       <Menu.Item key="2">Find Your County</Menu.Item>
//       <Menu.Item key="3">General Guides</Menu.Item>
//       <Menu.Item key="4"><p style={{ background: '#00474F' }}>Contact Us</p></Menu.Item>
//     </Menu>
//   </Header>
// );

const TopSection = () => (
  <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
    <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
      <div style={{ flexGrow: '1' }}>
        <img alt="topimage" src={TopImage} />
      </div>
      <div style={{
        display: 'flex', flexFlow: 'column nowrap', flexGrow: '1', justifyContent: 'center',
      }}
      >
        <h1 style={{ color: '#00474F' }}>Our Mission</h1>
        <p style={{ width: '450px' }}>The mission of Crime Survivors is to provide hope and healing to victims and survivors of crime through advocacy and the support of resources, information, and empowerment. All victims of crime have the right and responsibility to survive.</p>
        <Button
          className="menu-button"
          style={{
            background: '#00474F', borderColor: '#00474F', color: 'white', width: 'fit-content', margin: '0px',
          }}
          type="primary"
        >
          Find your country
        </Button>
      </div>
    </div>
    <div style={{ padding: '30px', display: 'flex', justifyContent: 'center' }}>
      <img alt="green chevron" src={CheveronGreen} />
    </div>
  </div>
);

function TestPage() {
  return (
    <div style={{ margins: '100px' }}>
      <Layout>
        {/* {HeaderRCMenu(width)} */}
        {HeaderCustom()}
        <Content style={{ padding: '0 50px' }}>
          {TopSection()}
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default TestPage;
