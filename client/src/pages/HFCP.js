import React from 'react';
import {
  Layout, Button, Tooltip, Row, Col, Typography,
  Divider,
} from 'antd';
import {
  FacebookFilled, InstagramFilled, YoutubeFilled, TwitterCircleFilled, QuestionCircleFilled,
  PlayCircleFilled,
} from '@ant-design/icons';
import { Icon } from '@ant-design/compatible';
// import Icon from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../styles/HFCP.css';

import CSLogo from '../images/CrimeSurvivorsLogo';
import BannerImage from '../images/Banner-Img.png';
import chevronDownBlack from '../images/chevrondownblack.svg';
import chevronDownWhite from '../images/chevrondownwhite.svg';
// import Section2BG from '../images/section-2.svg';
import courtVector from '../images/court.svg';
import supportVector from '../images/support.svg';
import bookVector from '../images/book.svg';
import dollarVector from '../images/dollarsign.svg';
import heartVector from '../images/heart.svg';

const {
  Header, Footer, /* Sider, */ Content,
} = Layout;
// const {
//   FacebookFilled, InstagramFilled, YoutubeFilled, TwitterCircleFilled, QuestionCircleFilled,
// } = Icon;

const { Title, Paragraph, Text } = Typography;

const navArray = ['Home', 'Find Your County', 'General Guides', 'Contact Us'];
const pickNavIcon = (string) => {
  const style = { fontSize: 27, color: 'white' };

  switch (string) {
    case 'Facebook':
      return <FacebookFilled style={style} />;
    case 'Instagram':
      return <InstagramFilled style={style} />;
    case 'Youtube':
      return <YoutubeFilled style={style} />;
    case 'Twitter':
      return <TwitterCircleFilled style={style} />;
    default:
      return <QuestionCircleFilled style={style} />;
  }
};

const infoArray = ['Find an Advocate', 'Obtain Crisis Support', 'Learn about Victims\' Rights', 'Pay for Crime Related Expenses', 'Heal and Recover'];
const pickInfoIcon = (string) => {
  const styles = { fontSize: 50 };

  switch (string) {
    case 'Find an Advocate':
      return <img src={courtVector} alt="Court Icon" style={styles} />;
    case 'Obtain Crisis Support':
      return <img src={supportVector} alt="Court Icon" style={styles} />;
    case 'Learn about Victims\' Rights':
      return <img src={bookVector} alt="Court Icon" style={styles} />;
    case 'Pay for Crime Related Expenses':
      return <img src={dollarVector} alt="Court Icon" style={styles} />;
    case 'Heal and Recover':
      return <img src={heartVector} alt="Court Icon" style={styles} />;
    default:
      return null;
  }
};

const renderInnerInfoBlocks = (topic) => (
  <Col span={8}>
    <div className="info-blocks-inner">
      <div className="info-blocks-inner-icons-box">
        <div className="info-blocks-inner-icons">
          {pickInfoIcon(topic)}
        </div>
      </div>
      <Title level={5}>
        {topic}
      </Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </Text>
    </div>
  </Col>
);

// const CSLogoAntIcon = <Icon component={() => (<>{CSLogo}</>)} />;
const CSLogoAntIcon = <Icon component={CSLogo} />;
// const ChevronIcon = <Icon component={ChevronDown} />;

// eslint-disable-next-line arrow-body-style
const highFidelityLandingPageConcept = () => {
  return (
    <>
      <Layout>
        <Button
          className="escape-button"
          type="primary"
          block
          size="large"
          href="https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/"
        >
          CLICK HERE TO LEAVE THIS SITE QUICKLY
        </Button>
        <Header>
          <Row>
            <Col span={1}>
              <Tooltip title="Home">
                <Button
                  className="logo-button"
                  type="ghost"
                  shape="circle"
                  // icon={<CSLogoAntIcon />}
                  icon={CSLogoAntIcon}
                  href="/"
                />
              </Tooltip>
            </Col>
            <Col span={2} offset={11}>
              Home
            </Col>
            {navArray.slice(1).map((link) => {
              if (link === 'Contact Us') {
                return (
                  <Col span={2} offset={1}>
                    <Button type="primary">{link}</Button>
                  </Col>
                );
              }
              return (
                <Col span={2} offset={1}>{link}</Col>
              );
            })}
          </Row>
        </Header>
        <Layout className="layout">
          {/* <Sider>
            <img src={BannerImage} alt="banner" />
          </Sider> */}
          <Content>
            <Row>
              <Col span={13}>
                <div className="banner-image-holder">
                  <div className="banner-image-tint" />
                  <img className="banner-image" src={BannerImage} alt="banner" />
                </div>
              </Col>
              <Col span={10} offset={1}>
                <div className="banner-right">
                  <Title>Crime Survivors</Title>
                  <Title level={2}>Resource Guides</Title>
                  <Divider style={{ fontWeight: 1000, color: 'black' }} />
                  <Paragraph className="banner-blurb">
                    The mission of Crime Survivors is to provide hope and healing to victims
                    and survivors of crime through advocacy and the support of resources,
                    information, and empowerment. All victims of crime have the right and
                    responsibility to survive.
                  </Paragraph>
                  <div className="banner-right-buttons">
                    <Button type="primary">Find Your County</Button>
                    <Button type="ghost" icon={<PlayCircleFilled />}>Watch Video</Button>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="navDown">
              {/* <ChevronIcon /> */}
              <img src={chevronDownBlack} alt="arrow down" />
            </div>
          </Content>
          <Content className="section-2">
            <div className="info-block">
              <Row>
                <Col className="info-block-header" span={8}>
                  <Title level={4} style={{ color: '#5E73AF' }}>NOT SURE WHERE TO START?</Title>
                  <Title level={2}>Our General Guides are here to help.</Title>
                  <Divider />
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </Paragraph>
                </Col>
                {infoArray.slice(0, 2).map(renderInnerInfoBlocks)}
              </Row>
              <Row>
                {infoArray.slice(2).map(renderInnerInfoBlocks)}
              </Row>
              <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '4%' }}>
                <Button type="primary">View Full Guides</Button>
              </div>
              {/* <Button type="primary">View Full Guides</Button> */}
            </div>
            <div className="navDown">
              <img src={chevronDownWhite} alt="arrow down" />
            </div>
          </Content>
        </Layout>
        <Footer className="footer">
          <div className="footer-left">
            <p style={{ fontWeight: 'bold' }}>Crime Survivors Resource Guide</p>
            {navArray.map((link) => <p>{link}</p>)}
          </div>
          <div className="footer-center">
            {['Facebook', 'Instagram', 'Youtube', 'Twitter'].map((sns) => (
              <Tooltip title={sns}>
                <Button type="ghost" icon={pickNavIcon(sns)} />
              </Tooltip>
            ))}
          </div>
          <div className="footer-right">
            <p style={{ fontWeight: 'bold' }}>DISCLAIMER</p>
            <p>
              The Crime Survivors Resource Guide has been created to provide general
              educational information to help you identify services and resources.
              The inclusion of an organization or service does not imply an
              endorsement or recommendation of the organization or service,
              nor does exclusion imply disapproval. While every effort is made to
              ensure the accuracy of the information provided, we make no guarantees.
              All information is provided “as is” without warranty of any kind, and
              you assume full responsibility for using the information contained herein.
              You understand and agree that Crime Survivors and its affiliates are not
              responsible or liable for any claim, loss, or damage resulting from the
              use of this information by you or any user.
            </p>
          </div>
        </Footer>
      </Layout>
    </>
  );
};

export default highFidelityLandingPageConcept;
