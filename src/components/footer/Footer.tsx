import React from 'react';
import { Link } from 'gatsby';

import FacebookIcon from '../../common/media/facebook-icon.svg';
import InstagramIcon from '../../common/media/instagram-icon.svg';
import YoutubeIcon from '../../common/media/youtube-icon.svg';
import TwitterIcon from '../../common/media/twitter-icon.svg';

import './footer.scss';

const Footer: React.FC = () => (
  <div className="footer">
    <div className="footer-menu footer-item">
      <p className="footer-menu-title">Crime Survivors Resource Guide</p>
      <Link to="/" className="footer-menu-submenu">Home</Link>
      <Link to="/#find-your-county" className="footer-menu-submenu">Find Your County</Link>
      <Link to="/guide" className="footer-menu-submenu">General Guides</Link>
      <Link to="https://www.crimesurvivors.org" className="footer-menu-submenu">Contact Us</Link>
    </div>
    <div className="footer-social-media footer-item">
      <a href="https://www.facebook.com/crimesurvivors"><img className="footer-icon" src={FacebookIcon} alt="facebook link" /></a>
      <a href="https://www.instagram.com/crimesurvivors"><img className="footer-icon" src={InstagramIcon} alt="instagram link" /></a>
      <a href="https://www.youtube.com/crimesurvivor"><img className="footer-icon" src={YoutubeIcon} alt="youtube link" /></a>
      <a href="https://twitter.com/crimesurvivors"><img className="footer-icon" src={TwitterIcon} alt="twitter link" /></a>
    </div>
    <div className="footer-disclaimer footer-item">
      <p className="footer-disclaimer-title">Disclaimer</p>
      <p className="footer-disclaimer-text">
        The Crime Survivors Resource Guide has been created to provide general
        educational information to help you identify services and resources.
        The inclusion of an organization or service does not imply an endorsement
        or recommendation of the organization or service, nor does exclusion imply
        disapproval. While every effort is made to ensure the accuracy of the information
        provided, we make no guarantees. All information is provided “as is” without warranty
        of any kind, and you assume full responsibility for using the information
        contained herein. You understand and agree that Crime Survivors and its
        affiliates are not responsible or liable for any claim, loss, or damage
        resulting from the use of this information by you or any user.
      </p>
    </div>
  </div>
);

export default Footer;
