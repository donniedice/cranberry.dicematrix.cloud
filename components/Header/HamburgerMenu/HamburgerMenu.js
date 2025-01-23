// File: src/components/HamburgerMenu/HamburgerMenu.jsx
import React, { useState } from 'react';
import './HamburgerMenu.css';
import { useTranslation } from 'react-i18next';

// Icon imports
import homeIcon from '../../../assets/images/icons/home-icon.svg';
import aboutIcon from '../../../assets/images/icons/about-icon.svg';
import contactIcon from '../../../assets/images/icons/contact-icon.svg';
import gearIcon from '../../../assets/images/icons/gear-icon.svg';
import oneDriveIcon from '../../../assets/images/icons/gear-icon.svg';
import excelIcon from '../../../assets/images/icons/gear-icon.svg';

// No need to import dotGridIcon since it's used as a mask in CSS

function HamburgerMenu() {
  const { t } = useTranslation('hamburgerMenu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="hamburger-menu-container">
      {/* Hamburger Button */}
      <button
        className="hamburger-button"
        onClick={handleMenuClick}
        aria-label={t('menu')}
        aria-expanded={isMenuOpen}
      >
        <div className="dots-container">
          <span
            className="dot-grid-icon"
            aria-hidden="true"
          ></span>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="hamburger-menu-dropdown">
          <div className="hamburger-menu-header">{t('headerTitle')}</div>
          <div className="hamburger-menu-content">
            <div className="hamburger-menu-left-col">
              <a href="/home" className="hamburger-menu-item">
                <img
                  src={homeIcon}
                  alt={t('home')}
                  className="hamburger-menu-item-icon"
                />
                {t('home')}
              </a>
              <a href="/about-us" className="hamburger-menu-item">
                <img
                  src={aboutIcon}
                  alt={t('about')}
                  className="hamburger-menu-item-icon"
                />
                {t('about')}
              </a>
              <a href="/templates" className="hamburger-menu-item">
                <img
                  src={gearIcon}
                  alt={t('templates')}
                  className="hamburger-menu-item-icon"
                />
                {t('templates')}
              </a>
            </div>
            <div className="hamburger-menu-right-col">
              <a href="/contact" className="hamburger-menu-item">
                <img
                  src={contactIcon}
                  alt={t('contact')}
                  className="hamburger-menu-item-icon"
                />
                {t('contact')}
              </a>
              <a href="/onedrive" className="hamburger-menu-item">
                <img
                  src={oneDriveIcon}
                  alt="OneDrive"
                  className="hamburger-menu-item-icon"
                />
                OneDrive
              </a>
              <a href="/excel" className="hamburger-menu-item">
                <img
                  src={excelIcon}
                  alt="Excel"
                  className="hamburger-menu-item-icon"
                />
                Excel
              </a>
            </div>
          </div>
          <div className="hamburger-menu-bottom-link">
            <a href="/site-map" className="bottom-link-text">
              {t('siteMap')} &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
