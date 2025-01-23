import React, { useState, useRef, useEffect } from 'react';
import './SettingsMenu.css';
import './SettingsButton.css';
import { ReactComponent as GearIcon } from '../../../assets/images/icons/gear-icon.svg';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import Footer from '../../Footer/Footer';
import { useTranslation } from 'react-i18next';

function SettingsMenu() {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { t } = useTranslation('settingsMenu');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFlyoutHover = () => {
    setIsFlyoutVisible(true);
    clearTimeout(timeoutRef.current);
  };

  const handleFlyoutLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsFlyoutVisible(false);
    }, 300);
  };

  const handleFlyoutClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className="settings-container"
      onMouseEnter={handleFlyoutHover}
      onMouseLeave={handleFlyoutLeave}
    >
      <div
        className={`settings-button ${isFlyoutVisible || isMenuOpen ? 'hovered' : ''}`}
        onClick={handleFlyoutClick}
        ref={buttonRef}
      >
        <span className="flyout-text">{isFlyoutVisible || isMenuOpen ? t('pageSettings') : ''}</span>
        <span className="gear-icon">
          <GearIcon />
        </span>
      </div>

      {isMenuOpen && (
        <div className="settings-menu" ref={menuRef}>
          <div className="close-btn" onClick={handleCloseMenu}>
            X
          </div>

          <h4>{t('pageSettings')}</h4>
          <LanguageSelector />

          {/* Footer inside dropdown */}
          <Footer currentYear={new Date().getFullYear()} className="footer-settings-menu" />
        </div>
      )}
    </div>
  );
}

export default SettingsMenu;
