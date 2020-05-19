import React from 'react';

import TwitterIcon from '../../images/twitter-icon.png';
import FacebookIcon from '../../images/facebook-icon.png';
import GooglePlusIcon from '../../images/googleplus-icon.png';
import YoutubeIcon from '../../images/youtube-icon.png';
import InstagramIcon from '../../images/instagram-icon.png';
import './Footer.css';


const Footer = () => (
  <div className="footer">
    <div className="footer-info">
      @ 2003-2019 Crime Survivors, Inc.
      {' '}
      All Rights Reserved.
      <br />
      Website by Commit the Change
    </div>
    <div className="footer-social-media">
      <a className="fb-link" href="https://www.facebook.com/crimesurvivors">
        <img src={FacebookIcon} id="fb-icon" alt="Facebook" />
      </a>
      {' '}
      <a className="twitter-link" href="https://twitter.com/crimesurvivors">
        <img src={TwitterIcon} id="twitter-icon" alt="Twitter" />
      </a>
      {' '}
      <a className="gplus-link" href="https://plus.google.com/+CrimesurvivorsOrg/">
        <img src={GooglePlusIcon} id="gplus-icon" alt="Google Plus" />
      </a>
      {' '}
      <a className="yt-link" href="https://www.youtube.com/crimesurvivor">
        <img src={YoutubeIcon} id="yt-icon" alt="Youtube" />
      </a>
      {' '}
      <a className="ig-link" href="https://www.instagram.com/crimesurvivors/">
        <img src={InstagramIcon} id="ig-icon" alt="Instagram" />
      </a>
    </div>
  </div>
);

export default Footer;
