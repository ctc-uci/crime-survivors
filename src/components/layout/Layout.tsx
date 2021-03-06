import React, { FunctionComponent } from 'react';

import EscapeButton from '../escapeButton/EscapeButton';
import Footer from '../footer/Footer';

import './layout.scss';

interface LayoutProps {
  header: React.ReactElement,
  content: React.ReactElement,
  footer?: React.ReactElement,
  leftSidebar?: React.ReactElement,
  rightSidebar?: React.ReactElement,
  enableLeftSidebar?: boolean,
  enableRightSidebar?: boolean
}

const defaultProps: LayoutProps = {
  header: <div style={{ backgroundColor: 'gray' }}><h1>Header</h1></div>,
  content: <div style={{ backgroundColor: 'blue' }}><h1>Content</h1></div>,
  footer: <Footer />,
  leftSidebar: <div style={{ backgroundColor: 'green' }}><h1>Leftsidebar</h1></div>,
  rightSidebar: <div style={{ backgroundColor: 'yellow' }}><h1>Rightsidebar</h1></div>,
  enableLeftSidebar: false,
  enableRightSidebar: false,
};

const Layout: FunctionComponent<LayoutProps> = ({
  header, content, footer, leftSidebar, rightSidebar, enableLeftSidebar, enableRightSidebar,
}) => (
  <div className="main-layout">
    <EscapeButton />
    <div className="header">{header}</div>
    <div className="middle">
      {enableLeftSidebar && (<div className="layout-left-sidebar">{leftSidebar}</div>)}
      <div className="content">{content}</div>
      {enableRightSidebar && (<div className="layout-right-sidebar">{rightSidebar}</div>)}
    </div>
    {footer}
  </div>
);

Layout.defaultProps = defaultProps;

export default Layout;
