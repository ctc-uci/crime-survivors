import React from 'react';
import './escape-button.scss';

const dstSite = 'https://www.google.com/';

const EscapeButton: React.FC = () => (
  <a id="escape-button" className="flipped" href={dstSite}>
    Press to Leave Site
  </a>
);

export default EscapeButton;
