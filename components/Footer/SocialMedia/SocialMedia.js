// src/components/Footer/SocialMedia/SocialMedia.js
import React from 'react';
import './SocialMedia.css';

// Import SVG Icons
import { ReactComponent as InstagramIcon } from '../../../assets/images/icons/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/images/icons/facebook-icon.svg';
import { ReactComponent as YoutubeIcon } from '../../../assets/images/icons/youtube-icon.svg';
import { ReactComponent as XIcon } from '../../../assets/images/icons/x-icon.svg'; // Updated X Icon import

function SocialMedia() {
  return (
    <div className="social-media">
      <a
        href="http://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram-icon"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </a>
      <a
        href="http://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook-icon"
        aria-label="Facebook"
      >
        <FacebookIcon />
      </a>
      <a
        href="http://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon youtube-icon"
        aria-label="YouTube"
      >
        <YoutubeIcon />
      </a>
      <a
        href="http://x.com/" // Updated link for X (formerly Twitter)
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon x-icon"
        aria-label="X (formerly Twitter)"
      >
        <XIcon />
      </a>
    </div>
  );
}

export default SocialMedia;
