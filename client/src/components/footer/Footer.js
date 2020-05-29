import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import TwitterIcon from '../../images/twitter-icon.svg';
import FacebookIcon from '../../images/facebook-icon.svg';
// import GooglePlusIcon from '../../images/googleplus-icon.png';
import YoutubeIcon from '../../images/youtube-icon.svg';
import InstagramIcon from '../../images/instagram-icon.svg';
import './Footer.css';


const Footer = () => {
  const { title, body } = useStaticQuery(graphql`
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
          <b id="subtitle">Crime Survivors Resources</b>
          <br />
          <Link to="/index/">Home</Link>
          <br />
          <Link to="/index/">Find your County</Link>
          <br />
          <Link to="/index/">General Guides</Link>
          <br />
          <Link to="/index/">Contact Us</Link>
        </div>
        <div className="footer-social-media">
          <a className="fb-link" href="https://www.facebook.com/crimesurvivors">
            <img src={FacebookIcon} id="fb-icon" alt="Facebook" />
          </a>
          <a className="ig-link" href="https://www.instagram.com/crimesurvivors/">
            <img src={InstagramIcon} id="ig-icon" alt="Instagram" />
          </a>
          <a className="yt-link" href="https://www.youtube.com/crimesurvivor">
            <img src={YoutubeIcon} id="yt-icon" alt="Youtube" />
          </a>
          <a className="twitter-link" href="https://twitter.com/crimesurvivors">
            <img src={TwitterIcon} id="twitter-icon" alt="Twitter" />
          </a>
          {/* <a className="gplus-link" href="https://plus.google.com/+CrimesurvivorsOrg/">
            <img src={GooglePlusIcon} id="gplus-icon" alt="Google Plus" />
          </a> */}
        </div>
      </div>
      <div className="disclaimer">
        <b>{title}</b>
        <div id="disclaimer-text">
          {body.body}
        </div>
      </div>
    </div>
  );
};

export default Footer;
