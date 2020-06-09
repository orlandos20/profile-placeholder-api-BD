const express = require('express');
const router = express.Router({mergeParams: true}); // permite leer los parametros que recibe en app.use de app.js

router.get('/', (req, res, next) =>{
  res.send({"name":"Orlando", "lastName": "Jimenez"});
});

router.get('/:id', (req, res, next) =>{
  res.send("profiles/:id");
});

module.exports = router;