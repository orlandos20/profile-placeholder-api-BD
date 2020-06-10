const express = require('express');
const router = express.Router();
const { postRegister } = require('../components/user/userControllers');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send( { "title": 'Profile placeholder Api - Home' } );
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST /register */
router.post('/register', async (req, res, next) => {
  let _context = {username: req.body.username, pass: req.body.password}
  postRegister(_context);
  let useCreated = await postRegister(_context);
  if(useCreated) res.redirect('/');
  // res.send(`${result }`);
});

/* GET /login */
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login */
router.post('/login', (req, res, next) => {
  res.send('POST /login');
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot');
});

/* PUT /forgot */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET /reset */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
});

/* PUT /reset */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});

module.exports = router;
