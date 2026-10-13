// Express routing example — separate router
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json([{ id: 1, email: 'demo@example.com' }]);
});

router.post('/users', (req, res) => {
  // Create user logic
  res.status(201).json({ id: 2, ...req.body });
});

module.exports = router;
// In main app: app.use('/api', require('./routes'));
