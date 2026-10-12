import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useLogin } from '../hooks/useLogin';

export default function LoginForm() {
  const { t } = useLanguage();
  const { email, setEmail, password, setPassword, error, handleSubmit, isSubmitting } = useLogin();

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <label htmlFor="email">{t('login.email')}</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: 8, marginTop: 4 }}
        />
      </div>

      <div>
        <label htmlFor="password">{t('login.password')}</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: 8, marginTop: 4 }}
        />
      </div>

      {error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}

      <button type="submit" disabled={isSubmitting} style={{ padding: 10, marginTop: 8 }}>
        {isSubmitting ? t('login.submitting') : t('login.submit')}
      </button>
    </form>
  );
}
