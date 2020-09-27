import React, { FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
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

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => <img src={node.data.target.fields.file['en-US'].url} style={{ maxWidth: '100%' }} alt={node.data.target.fields.description} />,
  },
};

const GuideContent: FunctionComponent<GuideContentProps> = ({ category, generalGuide }) => (
  <div>
    <p className="h0">{category}</p>
    <hr className="blue" />
    {generalGuide.nodes.map((guide) => (
      <div id={encodeURI(guide.title)} className="guide-section" key={uuidv4()}>
        <div className="guide-section-contentful">{documentToReactComponents(JSON.parse(guide.content.content), options)}</div>
        <hr className="blue-long" />
      </div>
    ))}
  </div>
);

GuideContent.defaultProps = defaultProps;

export default GuideContent;
