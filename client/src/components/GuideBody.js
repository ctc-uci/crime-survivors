import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import '../styles/CategoryPage.css';

function GuideBody({ contentfulGuide }) {
  // console.log(contentfulGuide);
  const { title, generalDescription, guideSections } = contentfulGuide;
  const generalDescriptionText = generalDescription ? generalDescription.generalDescription : '';

  const options = {
    renderNode: {
      // TODO: add proptypes
      [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) => <img src={fields.file['en-US'].url} height="300px" alt={fields.description} />, // eslint-disable-line 
    },
  };

  return (
    <div id="guide-page">
      <h1>{title}</h1>
      <p>{generalDescriptionText}</p>
      {/* TODO: figure out why eslint thinks guideSections.map need proptypes */}
      {guideSections && guideSections.map((guideSection) => { // eslint-disable-line
        const { content: { content } } = guideSection;
        return (
          <div className="guide-section" key={uuidv4()}>
            {documentToReactComponents(JSON.parse(content), options)}
          </div>
        );
      })}
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
