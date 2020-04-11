import React from 'react';
import PropTypes from 'prop-types';

function ResourceBody({ props }) {
  const { title, desc } = props;
  return (
    <div>
      <h1>{title}</h1>
      <div>{desc}</div>
    </div>
  );
}

// Defaults values for props, required by eslint
ResourceBody.defaultProps = {
  props: {
    address: 'address',
    category: 'category',
    phone: [{ desc: 'desc', number: '(555) 555-5555' }],
    title: 'title',
    desc: 'desc',
  },
  title: 'title',
  desc: 'desc',
};

// Proptype validation, required by eslint
ResourceBody.propTypes = {
  props: PropTypes.shape({
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
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default ResourceBody;
