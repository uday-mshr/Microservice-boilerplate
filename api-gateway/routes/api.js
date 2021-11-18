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

router.all('/:serviceName/:path', (req, res) => {
  console.log("User Page Called");
  console.log(req.params.serviceName);
  console.log(req.params.path);
  if (registry.services[req.params.serviceName]) {
    console.log(registry.services[req.params.serviceName].url + req.params.path);
    try {
      axios({
        method: req.method,
        url: registry.services[req.params.serviceName].url + req.params.path,
        headers: req.headers,
        data: req.body
      }).then((response) => {
        res.status(200).send(response.data)
      }).catch(err => res.send(err));
    }
    catch (err) {
      console.error("GG", err);
    }
  } else {
    res.send("Service Doesn't exist");
  }
});

module.exports = router;