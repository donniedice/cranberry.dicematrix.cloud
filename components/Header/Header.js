import React, { useState } from 'react';
import './Header.css';

// Import components
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import SettingsMenu from './SettingsMenu/SettingsMenu';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className={`header ${isNavOpen ? 'nav-open' : ''}`}>
      <div className="header-inner">
        {/* Hamburger Menu */}
        <HamburgerMenu isNavOpen={isNavOpen} onToggle={handleNavToggle} />

        {/* Settings Menu */}
        <SettingsMenu />
      </div>
    </header>
  );
}

export default Header;
