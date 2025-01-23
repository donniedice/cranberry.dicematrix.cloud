import React, { useState } from 'react';
import './HeaderNav.css';

function HeaderNav({ isMobile, onLinkClick }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <nav className={`header-nav ${isMobile ? 'mobile-nav' : 'desktop-nav'} ${isNavOpen ? 'open' : ''}`}>
      {isMobile ? (
        <>
          <button
            className="hamburger-button"
            onClick={toggleMobileNav}
            aria-label="Toggle Navigation"
            aria-expanded={isNavOpen}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
          <div className={`mobile-menu ${isNavOpen ? 'open' : ''}`}>
            <a href="/meet-dr-tess-garcia" onClick={onLinkClick}>
              Meet the Doctor
            </a>
            <a href="/services" onClick={onLinkClick}>
              Services
            </a>
            <a href="/contact" onClick={onLinkClick}>
              Contact
            </a>
          </div>
        </>
      ) : (
        <ul className="nav-list">
          <li>
            <a href="/meet-dr-tess-garcia" onClick={onLinkClick}>
              Meet the Doctor
            </a>
          </li>
          <li>
            <a href="/services" onClick={onLinkClick}>
              Services
            </a>
          </li>
          <li>
            <a href="/contact" onClick={onLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default HeaderNav;
