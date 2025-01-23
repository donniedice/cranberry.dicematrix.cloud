import React, { useState, useEffect } from 'react';
import './LanguageSelector.css';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { t, i18n } = useTranslation('languageSelector');
  
  // State to track the current language
  const [language, setLanguage] = useState(i18n.language);

  // Handle language change
  const switchLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);  // Update state when language changes
  };

  // Update the language when i18n.language changes
  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className="language-selector">
      <p>{t('select')}</p>
      <select
        onChange={switchLanguage}
        className="language-dropdown"
        value={language}  // Set value to track the selected language
      >
        <option value="en">{t('english')}</option>
        <option value="es">{t('spanish')}</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
