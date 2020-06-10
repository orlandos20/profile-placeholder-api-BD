const express = require('express');
const router = express.Router();

/* GET /profile */
router.get('/', (req, res, next) => {
  res.send('GET /profile');
});

/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id');
});

module.exports = router;