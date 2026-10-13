import { useLanguage } from '../i18n/LanguageContext';
import LoginForm from './LoginForm';
import LanguageSwitcher from './LanguageSwitcher';

export default function LoginPage() {
  const { t } = useLanguage();

  return (
    <div className="login-card">
      <div className="login-header">
        <h1 className="login-title">{t('login.title')}</h1>
        <LanguageSwitcher />
      </div>
      <LoginForm />
    </div>
  );
}
