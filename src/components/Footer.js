import React from 'react';
import "../components/Footer.css"
import facebook from "../components/assets/facebook.svg";
import instagram from "../components/assets/instagram.svg";
import twitter from "../components/assets/twitter.svg";
import youtube from "../components/assets/youtube.svg";

const Footer = () => {
  return (
    <footer>
      <div className="social-media-icons">
        <img src={facebook} alt=''></img>
        <img src={instagram} alt=''></img>
        <img src={twitter} alt=''></img>
        <img src={youtube} alt=''></img>
      </div>
      <div className="terms-and-conditions">
        <ul>
          <li>Conditions of Use</li>
          <li>Privacy and Policy</li>
          <li>Press Room</li>
        </ul>
      </div>
      <div className="copyright">
        <p> © 2023 Movie Discovery App by Defacto</p>
      </div>
    </footer>
  );
};

export default Footer;
