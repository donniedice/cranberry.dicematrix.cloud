import React from 'react';
import './Footer.css';
import SocialMedia from './SocialMedia/SocialMedia';
import { useTranslation } from 'react-i18next';

function Footer({ currentYear, className = '' }) {
  const { t } = useTranslation('footer');

  return (
    <footer className={`footer ${className}`}>
      {/* Social Media Icons */}
      <div className="footer-social-media">
        <SocialMedia />
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          {t('privacyPolicy')}
        </a>
        <span className="separator">|</span>
        <a href="/terms-of-use" target="_blank" rel="noopener noreferrer">
          {t('termsOfUse')}
        </a>
        <span className="separator">|</span>
        <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">
          {t('termsOfService')}
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>{t('copyright', { year: currentYear })}</p>
      </div>
    </footer>
  );
}

export default Footer;
