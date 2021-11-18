var express = require('express');
var router = express.Router();
const axios = require('axios');
const registry = require('./registry.json');

// router.all('/:apiName', (req, res) => {
//   console.log("api gateway router");
//   console.log(req.params.serviceName);
//   // console.log(req.params.path);
//   res.send("hello world")
// });

router.all('/:serviceName/:path', function (req, res) {
  console.log("User Page Called");
  console.log(req.params.serviceName);
  console.log(req.params.path);
  if(registry.services[req.params.serviceName]){
    // axios({
    //   method: req.method,
    //   url: registry.services[req.params.serviceName].url + req.params.path,
    //   headers: req.headers,
    //   data: req.body
    // }).then((response) => {
    //   res.send(response.data)
    // })
    res.send("Service exist");
  } else{
    res.send("Service Doesn't exist");
  }

  res.send("hello world")
});

module.exports = router;