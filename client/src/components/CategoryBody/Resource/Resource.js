/* global navigator */
/* global window */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './Resource.css';

import { pathify, whiteSpaceToDash } from '../../../utils/commonUtils';

const resourcePropType = PropTypes.shape({
  title: PropTypes.string,
  desc: PropTypes.shape({ desc: PropTypes.string }),
  phone: PropTypes.arrayOf(PropTypes.shape({
    desc: PropTypes.string,
    number: PropTypes.string,
  })),
  website: PropTypes.arrayOf(PropTypes.string),
  email: PropTypes.arrayOf(PropTypes.string),
  hours: PropTypes.string,
  address: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  category: PropTypes.string,
});

const defaultResourceProp = {
  title: null,
  desc: null,
  phone: null,
  website: null,
  email: null,
  hours: null,
  address: null,
  image: null,
  location: 'LOCATION',
  category: 'CATEGORY',
};

const Title = ({ title, location, category }) => {
  const [copyStatus, setCopyStatus] = useState(false);

  const copy = (loc, cat, t) => {
    navigator.clipboard.writeText(pathify([loc, cat], t, false, true)).then(
      () => {
        setCopyStatus(true);
      },
      () => {
        setCopyStatus(false);
      },
    );
    setTimeout(
      () => setCopyStatus(false), 3000,
    );
  };

  return (
    <div className={`title-banner ${copyStatus ? 'copied' : ''}`}>
      <div>{title}</div>
      <button
        type="button"
        className={`copyLinkButton ${copyStatus ? 'copied' : ''}`}
        onClick={() => copy(location, category, title)}
      >
        {copyStatus ? 'Copied to clipboard!' : 'Copy link to clipboard'}
      </button>
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  category: PropTypes.string,
};
Title.defaultProps = {
  title: 'TITLE',
  location: 'LOCATION',
  category: 'CATEGORY',
};

const Phones = (phones) => (
  <div className="contact">
    Phone Numbers
    {phones.map((phone) => (
      <li key={uuidv4()}>
        {phone.desc ? `${phone.desc}: ` : null}
        {' '}
        {phone.number}
      </li>
    ))}
  </div>
);
const Websites = (websites) => (
  <div className="contact">
    Websites
    {websites.map((link) => (
      <li>
        <button
          className="weblink"
          type="button"
          onClick={() => window.open(link)}
        >
          <u>{link}</u>
        </button>
      </li>
    ))}
  </div>
);
const Emails = (emails) => (
  <div className="contact">
    Emails
    {emails.map((email) => <li key={uuidv4()}>{email}</li>)}
  </div>
);
const Hours = (hours) => (
  <div className="contact">
    <li>{hours}</li>
  </div>
);
const Addr = (address) => (
  <div className="contact">
    Address
    <li>{address}</li>
  </div>
);
const Img = (image) => (
  <div>{image}</div>
);
const Desc = (desc) => (
  <div className="desc">
    {desc}
  </div>
);

const Resource = ({ resource }) => {
  const {
    location, category, title, desc, phone, website, email, hours, address, image,
  } = resource;
  return (
    <div key={uuidv4()} id={whiteSpaceToDash(title)} className="resource">
      <Title title={title} location={location} category={category} />
      {phone != null && Phones(phone)}
      {email != null && Emails(email)}
      {hours != null && Hours(hours)}
      {address != null && Addr(address)}
      {website != null && Websites(website)}
      {image != null && Img(image)}
      {desc != null && Desc(desc.desc)}
    </div>
  );
};
Resource.propTypes = {
  resource: resourcePropType,
};
Resource.defaultProps = {
  resource: defaultResourceProp,
};

const Resources = ({ resources }) => (
  <div className="resource-container">
    {' '}
    {resources.map((resource) => <Resource resource={resource} />)}
    {' '}
  </div>
);
Resources.propTypes = { resources: PropTypes.arrayOf(resourcePropType) };
Resources.defaultProps = { resources: [defaultResourceProp] };

export {
  Resources,
  resourcePropType,
  defaultResourceProp,
};
