import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function CategoryBody({ props }) {
  const nodes = props;
  return (
    <div>
      {nodes.map((resource) => (
        <div key={uuidv4() /* uuid bc array of items */}>
          <h1>{resource.title}</h1>
          <div>{resource.desc}</div>
        </div>
      ))}
    </div>
  );
}

// Defaults values for props, required by eslint
CategoryBody.defaultProps = {
  props: {
    nodes: [{
      address: 'address',
      category: 'category',
      phone: [{ desc: 'desc', number: '(555) 555-5555' }],
      title: 'title',
      desc: 'desc',
    }],
  },
};

// Proptype validation, required by eslint
CategoryBody.propTypes = {
  props: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string,
        category: PropTypes.string,
        phone: PropTypes.arrayOf(
          PropTypes.shape({
            desc: PropTypes.string,
            number: PropTypes.string,
          }),
        ),
        title: PropTypes.string,
        desc: PropTypes.string,
      }),
    ),
  }),
};

export default CategoryBody;
