import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// null checker helper function, need a better implementation in the future...
const mapPhone = (phone) => {
  if (phone == null) {
    return <div />;
  }
  return phone.map((phoneInfo) => (
    <div key={uuidv4() /* uuid bc array of items */}>
      <h3>
        {phoneInfo.desc}
        <br />
        {phoneInfo.number}
      </h3>
    </div>
  ));
};

// This is a functional react component (no states, only props)
const ExampleReactFunctional = (props) => {
  // deconstruct props, required by eslint
  const { resource } = props;

  return (
    <div>
      <h2>{resource.title}</h2>
      <h3>{resource.desc}</h3>
      <h3>{resource.category}</h3>
      {mapPhone(resource.phone)}
      <h3>{resource.address}</h3>
      <br />
    </div>
  );
};

// Defaults values for props, required by eslint
ExampleReactFunctional.defaultProps = {
  resource: {
    address: 'address',
    category: 'category',
    phone: [{ desc: 'desc', number: '(555) 555-5555' }],
    title: 'title',
    desc: 'desc',
  },
};

// Proptype validation, required by eslint
ExampleReactFunctional.propTypes = {
  resource: PropTypes.shape({
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
};

export default ExampleReactFunctional;
