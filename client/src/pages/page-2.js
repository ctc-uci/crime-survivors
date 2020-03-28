import React from 'react';
// import { Link } from 'gatsby';

// import Layout from '../components/layout';
// import SEO from '../components/seo';

import cvs from '../content/orange_county.yaml';

const category = 'Orange County Courts';
const elements = cvs[category];

const SecondPage = () => (
  <div>
    <h1>{category}</h1>
    <ul>
      {elements.map((resource) => (
        <div>
          <h1>{resource.title}</h1>
          <h2>{resource.desc}</h2>
          {resource.phone.map((phoneInfo) => (
            <h2>
              {phoneInfo.desc}
              <br />
              {phoneInfo.number}
            </h2>
          ))}
          <h2>{resource.website}</h2>
          <h2>{resource.hours}</h2>
          <h2>{resource.address}</h2>
          <br />
        </div>
      ))}
    </ul>
  </div>
);

export default SecondPage;
