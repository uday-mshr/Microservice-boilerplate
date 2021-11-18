var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
  res.send('response from Get Method')
});

router.post('/', (req,res)=>{
  res.send('response from Post Method')
});

module.exports = router;
