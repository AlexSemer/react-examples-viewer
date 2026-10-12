import { useState } from 'react';

export function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Simulate API call — replace with real auth later
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      console.log('Login attempt:', { email });
      // Success path would go here
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
    isSubmitting,
  };
}
