import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

import './item.scss';

export interface ItemPropType {
  title: string;
  body: string;
  link: string;
}

export const Item: React.FC<ItemPropType> = ({ title, body, link }) => (
  <Card title={<b>{title}</b>} style={{ height: 200 }}>
    <div>{body}</div>
    <div className="learn-button">
      <a href={link}>Learn More</a>
    </div>
  </Card>
);
