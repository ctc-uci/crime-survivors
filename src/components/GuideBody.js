import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import '../styles/guide-body.css';

function GuideBody({ contentfulGuide }) {
  // console.log(contentfulGuide);
  const { title, generalDescription, guideSections } = contentfulGuide;
  const generalDescriptionText = generalDescription ? generalDescription.generalDescription : '';

  let guideSectionsLeft = null;
  let guideSectionsRight = null;

  if (guideSections) {
    /* eslint-disable react/prop-types */
    const half = Math.ceil(guideSections.length / 2);
    guideSectionsLeft = guideSections.slice(0, half);
    guideSectionsRight = guideSections.slice(half + 1);
    /* eslint-disable react/prop-types */
  }

  const options = {
    renderNode: {
      // TODO: add proptypes
      [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) => <img src={fields.file['en-US'].url} height="300px" alt={fields.description} />, // eslint-disable-line 
    },
  };

  return (
    <div className="guide-page">
      <p className="guide-title">General Guide</p>
      <p className="guide-subtitle">{title}</p>
      <p className="guide-summary">{generalDescriptionText}</p>
      {/* TODO: figure out why eslint thinks guideSections.map need proptypes */}
      <div className="guide-container">
        <div className="guide-column">
          {guideSectionsLeft && guideSectionsLeft.map((guideSection) => { // eslint-disable-line
            const { content: { content } } = guideSection;
            return (
              <div className="guide-section" key={uuidv4()}>
                {documentToReactComponents(JSON.parse(content), options)}
              </div>
            );
          })}
        </div>
        <div className="guide-column">
          {guideSectionsRight && guideSectionsRight.map((guideSection) => { // eslint-disable-line
            const { content: { content } } = guideSection;
            return (
              <div className="guide-section" key={uuidv4()}>
                {documentToReactComponents(JSON.parse(content), options)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Defaults values for props, required by eslint
GuideBody.defaultProps = {
  contentfulGuide: [{
    title: 'title',
    generalDescription: {
      generalDescription: 'general Description',
    },
    guideSections: [{
      content: {
        content: 'contentful content',
      },
    }],
  }],
};

// Proptype validation, required by eslint
GuideBody.propTypes = {
  contentfulGuide: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      generalDescription: PropTypes.shape({
        generalDescription: PropTypes.string,
      }),
      guideSections: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.shape({
            content: PropTypes.string,
          }),
        }),
      ),
    }),
  ),
};

export default GuideBody;
