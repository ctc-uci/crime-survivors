import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './Quotes.css';

const quotesTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      organization: PropTypes.string,
      quote: PropTypes.string,
    }),
  ),
};
const quotesDefault = {
  quotes: [{
    author: 'AUTHOR',
    organization: 'ORG',
    quote: 'QUOTE',
  }],
};

const Quote = (quote, idx) => (
  <div className="quote-container">
    <div className={`quote-elem ${idx % 2 === 0 ? 'left' : 'right'}`} key={uuidv4()}>
      <div className="org">
        A message from the
        {' '}
        {quote.organization}
      </div>
      <div className="quote">
        {quote.quote.quote}
      </div>
      <div className="author">
        {quote.author}
      </div>
    </div>
  </div>
);

const Quotes = ({ quotes }) => (
  <div className="quotes">
    {quotes[0] && Quote(quotes[0], 0)}
    {quotes[1] && Quote(quotes[1], 1)}
  </div>
);

Quotes.propTypes = quotesTypes;
Quotes.defaultProps = quotesDefault;

export {
  Quotes,
  quotesTypes,
  quotesDefault,
};
