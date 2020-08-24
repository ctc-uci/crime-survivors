import React from 'react';
// import { withWindowSize } from 'react-fns';
import {
  Layout, Button, Row, Col, Card, Collapse,
} from 'antd';
import '../styles/test-page.css';
import 'antd/dist/antd.css';
import TopImage from '../images/TestPage_topimage.png';
import CheveronGreen from '../images/TestPage_chevrongreen.png';
import CheveronWhite from '../images/TestPage_chevronwhite.png';
import BottomImage from '../images/TestPage_bottomimg.png';

const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;

const Logo = () => (
  <div style={{ float: 'left', margin: '16px 24px 16px 0' }}>
    <h3 style={{ color: 'black' }}>Crime Survivors</h3>
  </div>
);

const HeaderCustomFlexBox = () => (
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

// const TopSection = () => (
//   <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
//     <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
//       <div style={{ flexGrow: '1' }}>
//         <img alt="topimage" src={TopImage} />
//       </div>
//       <div style={{
//         display: 'flex', flexFlow: 'column nowrap', flexGrow: '1', justifyContent: 'center',
//       }}
//       >
//         <h1 style={{ color: '#00474F' }}>Our Mission</h1>
// eslint-disable-next-line max-len
//         <p style={{ width: '450px' }}>The mission of Crime Survivors is to provide hope and healing to victims and survivors of crime through advocacy and the support of resources, information, and empowerment. All victims of crime have the right and responsibility to survive.</p>
//         <Button
//           className="menu-button"
//           style={{
// eslint-disable-next-line max-len
//             background: '#00474F', borderColor: '#00474F', color: 'white', width: 'fit-content', margin: '0px',
//           }}
//           type="primary"
//         >
//           Find your country
//         </Button>
//       </div>
//     </div>
//     <div style={{ padding: '30px', display: 'flex', justifyContent: 'center' }}>
//       <img alt="green chevron" src={CheveronGreen} />
//     </div>
//   </div>
// );

const TopSectionGrid = () => (
  <div>
    <Row>
      <Col sm={24} md={12}>
        <img alt="topimage" src={TopImage} />
      </Col>
      <Col
        sm={24}
        md={12}
        style={{
          display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', padding: '24px',
        }}
      >
        <h1 style={{ color: '#00474F' }}>Our Mission</h1>
        <p style={{ maxWidth: '450px' }}>The mission of Crime Survivors is to provide hope and healing to victims and survivors of crime through advocacy and the support of resources, information, and empowerment. All victims of crime have the right and responsibility to survive.</p>
        <Button
          className="menu-button"
          style={{
            background: '#00474F', borderColor: '#00474F', color: 'white', width: 'fit-content', margin: '0px',
          }}
          type="primary"
        >
          Find your country
        </Button>
      </Col>
    </Row>
    <Row justify="center">
      <Col style={{ padding: '30px', display: 'flex', justifyContent: 'center' }}>
        <img alt="green chevron" src={CheveronGreen} />
      </Col>
    </Row>
  </div>
);

const MiddleSection = () => (
  <div className="middle-section">
    <Row justify="center" style={{ padding: '128px 0px 0px 0px' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Not sure where to start?</h1>
    </Row>
    <Row justify="center" style={{ padding: '0px' }}>
      <p style={{ color: 'white' }}>Our General Guides are here to help.</p>
    </Row>
    <Row justify="center" style={{ padding: '48px' }}>
      <Row gutter={[{ xs: 8, sm: 8, md: 24 }, { xs: 8, sm: 8, md: 24 }]} justify="center" style={{ maxWidth: '1080px' }}>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ background: '#002329', borderColor: 'black' }} headStyle={{ color: 'white' }} bodyStyle={{ color: 'white' }} size="small" title="Find an Advocate"><p>Popover content goes here and here and here</p></Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ background: '#002329', borderColor: 'black' }} headStyle={{ color: 'white' }} bodyStyle={{ color: 'white' }} size="small" title="Find an Advocate"><p>Popover content goes here and here and here</p></Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ background: '#002329', borderColor: 'black' }} headStyle={{ color: 'white' }} bodyStyle={{ color: 'white' }} size="small" title="Find an Advocate"><p>Popover content goes here and here and here</p></Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ background: '#002329', borderColor: 'black' }} headStyle={{ color: 'white' }} bodyStyle={{ color: 'white' }} size="small" title="Find an Advocate"><p>Popover content goes here and here and here</p></Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ background: '#002329', borderColor: 'black' }} headStyle={{ color: 'white' }} bodyStyle={{ color: 'white' }} size="small" title="Find an Advocate"><p>Popover content goes here and here and here</p></Card>
        </Col>
      </Row>
    </Row>
    <Row justify="center" style={{ padding: '48px' }}>
      <Button
        style={{
          background: '#FFFFFF', borderColor: '#00474F', color: '#00474F', width: 'fit-content',
        }}
        type="primary"
      >
        View Full Guides
      </Button>
    </Row>
    <Row justify="center" style={{ padding: '48px' }}>
      <img alt="white chevron" src={CheveronWhite} />
    </Row>
  </div>
);

const BottomSection = () => (
  <div style={{ padding: '128px 0 0 0' }}>
    <Row>
      <Col>
        <img alt="bottomImage" src={BottomImage} />
      </Col>
      <Col
        sm={24}
        md={12}
        style={{
          display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', padding: '24px',
        }}
      >
        <h1 style={{ color: '#00474F' }}>Country Resources Guides</h1>
        <p style={{ maxWidth: '450px', color: '#00474F' }}>These guides are filled with resources to help victims become survivors. The resources and referrals provided herein can be the first steps for victims and their families to rebuild their lives.</p>
        <Collapse accordion bordered={false}>
          <Panel header="Los Angeles" key="1">
            <p>Text</p>
          </Panel>
          <Panel header="Orange County" key="2">
            <p>Text</p>
          </Panel>
          <Panel header="San Bernardino" key="3">
            <p>Text</p>
          </Panel>
          <Panel header="Venture" key="4">
            <p>Text</p>
          </Panel>
          <Panel header="San Diego" key="5">
            <p>Text</p>
          </Panel>
          <Panel header="Riverside" key="6">
            <p>Text</p>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  </div>
);

function TestPage() {
  return (
    <div style={{ margins: '100px' }}>
      <Layout style={{ maxWidth: '1920px' }}>
        {/* {HeaderRCMenu(width)} */}
        {HeaderCustomFlexBox()}
        <Content style={{ padding: '0 50px' }}>
          {/* {TopSection()} */}
          {TopSectionGrid()}
          {MiddleSection()}
          {BottomSection()}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default TestPage;
