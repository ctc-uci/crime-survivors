import React, { FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './guide-content.scss';

interface Guide {
  title: string
  content: {
    content: string
  }
}

interface GuideContentProps {
  category: String,
  generalGuide: {
    nodes: Guide[]
  }
}

const defaultProps: GuideContentProps = {
  category: 'category',
  generalGuide: {
    nodes: [{ title: 'title', content: { content: '' } }],
  },
};

const GuideContent: FunctionComponent<GuideContentProps> = ({ category, generalGuide }) => (
  <div>
    <p className="h0">{category}</p>
    <hr className="blue" />
    {generalGuide.nodes.map((guide) => (
      <div id={encodeURI(guide.title)} className="guide-section" key={uuidv4()}>
        <div className="guide-section-contentful">{documentToReactComponents(JSON.parse(guide.content.content))}</div>
        <hr className="blue-long" />
      </div>
    ))}
  </div>
);

GuideContent.defaultProps = defaultProps;

export default GuideContent;
