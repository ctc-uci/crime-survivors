import React from 'react';
import {
  Layout, Button, Tooltip, /* Typography, */
} from 'antd';
import {
  FacebookFilled, InstagramFilled, YoutubeFilled, TwitterCircleFilled, QuestionCircleFilled,
} from '@ant-design/icons';

import 'antd/dist/antd.css';
import '../styles/HFCP.css';

const {
  Header, Footer, Sider, Content,
} = Layout;

// const { Title, Paragraph, Text } = Typography;

const pickIcon = (string) => {
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
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer className="footer">
          <div className="footer-left">
            <p style={{ fontWeight: 'bold' }}>Crime Survivors Resource Guide</p>
            {['Home', 'Find Your County', 'General Guides', 'Contact Us'].map((link) => <p>{link}</p>)}
          </div>
          <div className="footer-center">
            {['Facebook', 'Instagram', 'Youtube', 'Twitter'].map((sns) => (
              <Tooltip title={sns}>
                <Button type="ghost" icon={pickIcon(sns)} />
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
