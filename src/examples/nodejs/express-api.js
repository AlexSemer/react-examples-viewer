// Node.js / Express API example
// Modular routes, middleware for auth, JSON responses

const express = require('express');
const app = express();
app.use(express.json());

// Simple in-memory store for demo
const users = [{ email: 'demo@example.com', password: 'secret' }];

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.json({ success: true, token: 'fake-jwt-token', user: { email } });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Protected route example
function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({ email: 'demo@example.com', name: 'Demo User' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
