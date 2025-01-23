# Cranberry.DiceMatrix.Cloud

This repository contains a **React-based website framework template** that serves as a mockup of the **Microsoft Edge new tab page**. The project is designed for quick customization and deployment for web development needs.

---

## Features

- **React Framework**: Built using React for fast and modular development.
- **Edge New Tab Page Design**: Mimics the aesthetic and functionality of the Edge new tab page for a familiar user experience.
- **Customizable Components**: Easily adaptable components to suit various use cases.
- **Multilingual Support**: Includes example locales (`en.json` and `es.json`) for multilingual capabilities.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## Folder Structure

```plaintext
.
├── App.css
├── App.js
├── assets
│   └── images
├── components
│   ├── Footer
│   │   ├── Footer.css
│   │   ├── Footer.js
│   │   ├── locales
│   │   │   ├── en.json
│   │   │   └── es.json
│   │   └── SocialMedia
│   │       ├── SocialMedia.css
│   │       └── SocialMedia.js
│   ├── Header
│   │   ├── HamburgerMenu
│   │   │   ├── HamburgerMenu.css
│   │   │   ├── HamburgerMenu.js
│   │   │   └── locales
│   │   │       ├── en.json
│   │   │       └── es.json
│   │   ├── Header.css
│   │   ├── Header.js
│   │   ├── locales
│   │   │   ├── en.json
│   │   │   └── es.json
│   │   └── SettingsMenu
│   │       ├── LanguageSelector
│   │       │   ├── LanguageSelector.css
│   │       │   ├── LanguageSelector.js
│   │       │   └── locales
│   │       │       ├── en.json
│   │       │       └── es.json
│   │       ├── locales
│   │       │   ├── en.json
│   │       │   └── es.json
│   │       ├── SettingsButton.css
│   │       ├── SettingsMenu.css
│   │       └── SettingsMenu.js
│   └── unused-elements
├── i18n.js
├── index.css
├── index.js
├── pages
│   └── Home
│       ├── Home.css
│       ├── Home.js
│       └── locales
│           ├── en.json
│           └── es.json
├── reportWebVitals.js
├── setupTests.js
└── themes
    └── defaultTheme.css

24 directories, 66 files
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/donniedice/cranberry.dicematrix.cloud.git
   ```

2. Navigate to the project directory:
   ```bash
   cd cranberry.dicematrix.cloud
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

---

## Deployment

1. Build the project for production:
   ```bash
   npm run build
   ```

2. Update permissions for the `build` directory (if required):
   ```bash
   sudo chown -R www-data:www-data ./build
   sudo chmod -R 755 ./build
   ```

3. Deploy the `build` folder to your web server.

---

## Customization

- **Assets**: Replace images in the `assets/images/` folder to update logos, backgrounds, and icons.
- **Themes**: Modify CSS in `themes/defaultTheme.css` for custom styling.
- **Localization**: Add or update language files in `locales/` for multilingual support.

---

## Stylesheet Overview

Below is a copy of the `src/index.css` file used in this project:

```css
/* File: src/index.css */

/* ========================= */
/* Default Theme Variables   */
/* ========================= */

:root {
    /* ------------------------------------- */
    /* Font Variables */
    /* ------------------------------------- */
    --Roboto: 'Roboto', sans-serif; /* Default font for body text */
    --Arial: 'Arial', sans-serif; /* Font for headings */
    --Helvetica: 'Helvetica', sans-serif; /* Font for buttons */
  
    /* ------------------------------------- */
    /* Font for Specific Sections */
    /* ------------------------------------- */
    --font-body: var(--Roboto); /* Body font */
  
    /* Pages / Home */
    --HomeExtraTextColor: #1b3e68; /* Dark blue text */
    --HomeCardBackground: #ff0044; /* Vibrant red card background */
    --HomeCardShadow: 0 4px 8px #0000001a; /* Subtle black shadow (10% opacity) */
    --HomeCardTextColor: #000000; /* Black text color */

    /* ------------------------------------- */
    /* Header Section Font */
    /* ------------------------------------- */
    --HeaderTextColor: #1b3e68; /* Dark blue text */
    --HeaderBackgroundColor: transparent; /* Transparent background */
    --HeaderFontFamily: var(--Arial); /* Header font family (Arial for headings) */
    --HeaderTextSize: 24px; /* Header text size */

    /* Hamburger Menu Variables */
    --HamburgerMenuButtonSize: 36px;
    --HamburgerMenuButtonBackground: transparent;
    --HamburgerMenuButtonHoverBackground: #f1f1f147;
    --HamburgerMenuDotColor: #ffffff; /* Default dot color (white) */
    --HamburgerMenuDotHoverColor: #ffffff; /* Hover dot color (gray) */
    --HamburgerMenuIconContainerSize: 36px;
    --HamburgerMenuIconSize: 24px;
    --HamburgerMenuDropdownBackground: #2b2b2b;
    --HamburgerMenuDropdownText: #ffffff;

    /* ========================= */
    /* Settings Menu Variables */
    /* ========================= */
    --SettingsMenuFontFamily: var(--Roboto);
    --SettingsMenuFontSize: 14px;
    --SettingsMenuFlyoutFontFamily: var(--Roboto);
    --SettingsMenuFlyoutTextSize: 14px;

    /* Custom Colors for Settings Menu */
    --SettingsMenuContainerBackground: transparent;
    --SettingsMenuButtonBackground: transparent;
    --SettingsMenuButtonHoverBackground: #5b5b5b;
    --SettingsMenuFlyoutTextColor: #ffffff;

    /* Mobile-specific overrides */
    --LanguageSelectorFontSizeMobile: 16px;
    --LanguageSelectorTitleFontSizeMobile: 18px;
    --LanguageSelectorButtonFontSizeMobile: 16px;

    /* ------------------------------------- */
    /* Footer Section Font */
    /* ------------------------------------- */
    --FooterTextColor: #ffffff; /* White text */
    --FooterFontFamily: var(--Helvetica); /* Footer font family */
    --FooterTextSize: 10px; /* Footer text size */
  }
```

---

## Contributions

Feel free to fork this repository and submit pull requests to improve the template or add new features.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Author

Developed by **Donniedice**.

