import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { pathify } from '../../utils/commonUtils';

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
      <div className="footer-navigation">
        <div className="footer-local">
          <b className="subtitle">Crime Survivors Resources</b>
          <br />
          <Link to="/">Home</Link>
          <br />
          <Link to="/#county-section">Find your County</Link>
          <br />
          <Link to={pathify(['guide'])}>General Guides</Link>
          <br />
          <a href="https://crimesurvivors.org/contact-us/">Contact Us</a>
        </div>
        <div className="footer-social-media">
          <a className="fb-link" href="https://www.facebook.com/crimesurvivors">
            <img src={FacebookIcon} className="fb-icon" alt="Facebook" />
          </a>
          <a className="ig-link" href="https://www.instagram.com/crimesurvivors/">
            <img src={InstagramIcon} className="ig-icon" alt="Instagram" />
          </a>
          <a className="yt-link" href="https://www.youtube.com/crimesurvivor">
            <img src={YoutubeIcon} className="yt-icon" alt="Youtube" />
          </a>
          <a iclassNamed="twitter-link" href="https://twitter.com/crimesurvivors">
            <img src={TwitterIcon} className="twitter-icon" alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="disclaimer">
        <b>{title}</b>
        <div className="disclaimer-text">
          {body}
        </div>
      </div>
    </div>
  );
};

export default Footer;
