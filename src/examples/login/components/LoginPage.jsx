import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import LoginForm from './LoginForm';
import LanguageSwitcher from './LanguageSwitcher';

export default function LoginPage() {
  const { t } = useLanguage();

  return (
    <div style={{ maxWidth: 400, margin: '80px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>{t('login.title')}</h1>
        <LanguageSwitcher />
      </div>
      <LoginForm />
    </div>
  );
}
