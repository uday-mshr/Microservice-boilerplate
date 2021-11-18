var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
  res.status(200).send('response from Get Method')
});

router.post('/signup', (req, res) => {
  res.status(200).send('response from Post Method')
});

module.exports = router;
