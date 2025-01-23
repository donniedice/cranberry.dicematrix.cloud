import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import JSON files for various components
import enHome from './pages/Home/locales/en.json';
import esHome from './pages/Home/locales/es.json';
import enHeader from './components/Header/locales/en.json';
import esHeader from './components/Header/locales/es.json';
import enSettingsMenu from './components/Header/SettingsMenu/locales/en.json';
import esSettingsMenu from './components/Header/SettingsMenu/locales/es.json';
import enHamburgerMenu from './components/Header/HamburgerMenu/locales/en.json';
import esHamburgerMenu from './components/Header/HamburgerMenu/locales/es.json';
import enFooter from './components/Footer/locales/en.json';
import esFooter from './components/Footer/locales/es.json';
import enLanguageSelector from './components/Header/SettingsMenu/LanguageSelector/locales/en.json';
import esLanguageSelector from './components/Header/SettingsMenu/LanguageSelector/locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: enHome,
        header: enHeader,
        settingsMenu: enSettingsMenu,
        hamburgerMenu: enHamburgerMenu,
        footer: enFooter,
        languageSelector: enLanguageSelector, // LanguageSelector translations for English
      },
      es: {
        home: esHome,
        header: esHeader,
        settingsMenu: esSettingsMenu,
        hamburgerMenu: esHamburgerMenu,
        footer: esFooter,
        languageSelector: esLanguageSelector, // LanguageSelector translations for Spanish
      },
    },
    ns: ['home', 'header', 'settingsMenu', 'hamburgerMenu', 'footer', 'languageSelector'], // Added languageSelector namespace
    defaultNS: 'home',
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
