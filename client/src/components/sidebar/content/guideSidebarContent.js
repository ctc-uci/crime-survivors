import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Guide from '../guide/guide';
import '../sidebar.css';

const GuideSidebarContent = ({ content }) => (
  <div>
    { content.nodes.map((guide) => (
      <div key={uuidv4()}>
        <Guide guide={guide} />
      </div>
    ))}
  </div>
);

GuideSidebarContent.defaultProps = {
  content: {
    nodes: [
      {
        title: 'title',
      },
    ],
  },
};

GuideSidebarContent.propTypes = {
  content: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      }),
    ),
  }),
};

export default GuideSidebarContent;
