// Next.js App Router login page example (app/login/page.tsx)
// Modular, uses design tokens conceptually, i18n ready

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default function LoginPage() {
  return (
    <div className="login-card">
      <h1>Sign in</h1>
      {/* Form would use server actions or client component */}
      <form action="/api/auth/login" method="POST">
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
