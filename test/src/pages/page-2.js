import React from 'react';
// import { Link } from 'gatsby';

// import Layout from '../components/layout';
// import SEO from '../components/seo';

import cvs from '../content/crimeVictimServices.yml';

const elements = cvs.resources;

const SecondPage = () => (
  <ul>
    {elements.map((resource) => (
      <div>
        <h1>{resource.org.title}</h1>
        <h2>{resource.org.description}</h2>
        <h2>{resource.org.phone.description}</h2>
        <h2>{resource.org.phone.number}</h2>
        <h2>{resource.org.website}</h2>
        <h2>{resource.org.hours}</h2>
        <h2>{resource.org.address}</h2>
        <br />
      </div>
    ))}
  </ul>
);

export default SecondPage;
