import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useLogin } from '../hooks/useLogin';

export default function LoginForm() {
  const { t } = useLanguage();
  const { email, setEmail, password, setPassword, error, handleSubmit, isSubmitting } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-field">
        <label htmlFor="email">{t('login.email')}</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="login-field">
        <label htmlFor="password">{t('login.password')}</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p className="login-error">{error}</p>}

      <button type="submit" disabled={isSubmitting} className="login-submit">
        {isSubmitting ? t('login.submitting') : t('login.submit')}
      </button>
    </form>
  );
}
