var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var os = require("os");

app.get('/', function (req, res) {
  var response = {
    "Message": "My nodejs container running...",
    "Hostname": os.hostname,
    "NodeJS version": process.version,
    "UserInfo": os.userInfo(),
    "Request Headers": req.headers,
  }
  res.json(response);
});

app.listen(PORT)
console.log('Running node app in http://localhost:' + PORT);
