import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const quotesTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      quote: PropTypes.string,
    }),
  ),
};
const quotesDefault = {
  quotes: [{
    title: 'TITLE',
    quote: 'QUOTE',
  }],
};

const Quote = (quote) => (
  <div key={uuidv4()}>
    {quote}
  </div>
);

const Quotes = ({ quotes }) => (
  <div>
    {quotes.map((quote) => Quote(quote))}
  </div>
);
Quotes.propTypes = quotesTypes;
Quotes.defaultProps = quotesDefault;

export {
  Quotes,
  quotesTypes,
  quotesDefault,
};
