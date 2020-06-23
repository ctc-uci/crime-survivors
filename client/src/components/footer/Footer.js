import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import TwitterIcon from '../../images/twitter-icon.svg';
import FacebookIcon from '../../images/facebook-icon.svg';
// import GooglePlusIcon from '../../images/googleplus-icon.png';
import YoutubeIcon from '../../images/youtube-icon.svg';
import InstagramIcon from '../../images/instagram-icon.svg';
import './Footer.css';

const Footer = () => {
  const { title, body: { body } } = useStaticQuery(graphql`
    query DislaimerQuery {
      allContentfulDisclaimer {
        edges {
          node {
            title
            body {
              body
            }
          }
        }
      }
    }`).allContentfulDisclaimer.edges[0].node;

  return (
    <div className="footer">
      <div id="footer-navigation">
        <div id="footer-local">
          <b id="subtitle">Crime Survivors Resources</b>
          <br />
          <Link to="/index/">Home</Link>
          <br />
          <Link to="/index/">Find your County</Link>
          <br />
          <Link to="/index/">General Guides</Link>
          <br />
          <Link id="contact-us" to="/index/">Contact Us</Link>
        </div>
        <div id="footer-social-media">
          <a id="fb-link" href="https://www.facebook.com/crimesurvivors">
            <img src={FacebookIcon} id="fb-icon" alt="Facebook" />
          </a>
          <a id="ig-link" href="https://www.instagram.com/crimesurvivors/">
            <img src={InstagramIcon} id="ig-icon" alt="Instagram" />
          </a>
          <a id="yt-link" href="https://www.youtube.com/crimesurvivor">
            <img src={YoutubeIcon} id="yt-icon" alt="Youtube" />
          </a>
          <a id="twitter-link" href="https://twitter.com/crimesurvivors">
            <img src={TwitterIcon} id="twitter-icon" alt="Twitter" />
          </a>
          {/* <a id="gplus-link" href="https://plus.google.com/+CrimesurvivorsOrg/">
            <img src={GooglePlusIcon} id="gplus-icon" alt="Google Plus" />
          </a> */}
        </div>
      </div>
      <div id="disclaimer">
        <b>{title}</b>
        <div id="disclaimer-text">
          {body}
        </div>
      </div>
    </div>
  );
};

export default Footer;
