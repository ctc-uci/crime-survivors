import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Resource.css';
import { TitlePropType, ResourcePropType } from '../interfaces';
import { pathify, whiteSpaceToDash } from '../../../utils/commonUtils';

const [
  location, category, title, desc, phone, website, email, hours, address,
] = ['', '', '', { desc: '' }, [], [], [], '', ''];

const defaultResourceProp = {
  location, category, title, desc, phone, website, email, hours, address,
};

const Title: React.FC<TitlePropType> = ({ title, location, category }) => {
  const [copyStatus, setCopyStatus] = useState(false);

  const copy = (loc: string, cat: string, t: string) => {
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

Title.defaultProps = {
  title,
  location,
  category,
};

const Phones = (phones: ResourcePropType['phone']) => (
  <>
    Phone Numbers
    {phones.map((phone) => (
      <li key={uuidv4()}>
        {phone.desc ? `${phone.desc}: ` : null}
        {' '}
        {phone.number}
      </li>
    ))}
  </>
);
const Websites = (websites: ResourcePropType['website']) => (
  <>
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
  </>
);

const Resource: React.FC<{resource: ResourcePropType}> = (
  { resource },
) => {
  const {
    location, category, title, desc, phone, website, email, hours, address,
  } = resource;
  return (
    <div key={uuidv4()} id={whiteSpaceToDash(title)} className="resource">
      <Title title={title} location={location} category={category} />
      <div className="contact">
        {phone && Phones(phone)}

        {email && 'Emails'}
        {email && email.map((e) => <li key={uuidv4()}>{e}</li>)}

        {hours && 'Hours'}
        {hours && <li>{hours}</li>}

        {address && 'Address'}
        {address && <li>{address}</li>}

        {website && Websites(website)}
      </div>
      {desc && <div className="desc">{desc.desc}</div>}
    </div>
  );
};
Resource.defaultProps = {
  resource: defaultResourceProp,
};

const Resources: React.FC<{resources: ResourcePropType[]}> = ({ resources }) => (
  <div className="resource-container">
    {' '}
    {resources.map((resource) => <Resource resource={resource} />)}
    {' '}
  </div>
);
Resources.defaultProps = { resources: [defaultResourceProp] };

export {
  Resources,
  defaultResourceProp,
};
