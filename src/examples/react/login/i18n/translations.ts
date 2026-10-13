export const translations = {
  en: {
    'login.title': 'Sign in',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.submit': 'Sign in',
    'login.submitting': 'Signing in…',
  },
  el: {
    'login.title': 'Σύνδεση',
    'login.email': 'Email',
    'login.password': 'Κωδικός',
    'login.submit': 'Σύνδεση',
    'login.submitting': 'Σύνδεση…',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
