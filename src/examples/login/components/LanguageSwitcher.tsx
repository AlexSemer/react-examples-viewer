import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'el', label: 'Ελληνικά' },
] as const;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="language-switcher"
      aria-label="Select language"
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
