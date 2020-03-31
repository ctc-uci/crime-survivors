import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// This is a stateful react component
class ExampleReactStateful extends Component {
  constructor(props) {
    super(props);

    // set ur default states!
    this.state = {
      counter: 0,
    };

    // bind ur event handlers!
    this.incrementFunction = this.incrementFunction.bind(this);

    this.mapPhone = this.mapPhone.bind(this);
  }

  // null checker helper function, need a better implementation in the future...
  mapPhone() {
    const { resource } = this.props;

    if (resource.phone == null) {
      return <div />;
    }
    return resource.phone.map((phoneInfo) => (
      <div key={uuidv4() /* uuid bc array of items */}>
        <h3>
          {phoneInfo.desc}
          <br />
          {phoneInfo.number}
        </h3>
      </div>
    ));
  }

  // example function
  incrementFunction() {
    // use this functional pattern to set state, required by eslint
    this.setState((previousState) => ({ ...previousState, counter: previousState.counter + 1 }));
  }

  render() {
    // deconstruct state, required by eslint
    const { counter } = this.state;

    // deconstruct props, required by eslint
    const { resource } = this.props;

    return (
      <div>

        {/* stateful usage */}
        <h2>
          Button has been clicked
          {' '}
          {counter}
          {' '}
          times!
        </h2>
        <button type="button" onClick={this.incrementFunction}>Click mee</button>

        <h2>{resource.title}</h2>
        <h3>{resource.desc}</h3>
        <h3>{resource.category}</h3>
        {this.mapPhone()}
        <h3>{resource.address}</h3>
        <br />
      </div>
    );
  }
}

// Defaults values for props, required by eslint
ExampleReactStateful.defaultProps = {
  resource: {
    address: 'address',
    category: 'category',
    phone: [{ desc: 'desc', number: '(555) 555-5555' }],
    title: 'title',
    desc: 'desc',
  },
};

// Proptype validation, required by eslint
ExampleReactStateful.propTypes = {
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

export default ExampleReactStateful;
