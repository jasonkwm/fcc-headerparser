var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require("cors");
var userAgent = require("express-useragent");


var app = express();
var api = "/api/whoami";


app.use(bodyParser.json());
app.use(cors());
app.use(userAgent.express());

app.get(api, (req, res) =>{
  var language = req.acceptsLanguages();
  var software = "OS:" + req.useragent.os+ "; Browser:" + req.useragent.browser + "; Version:" + req.useragent.version+";";
  var ipAddress = req.ip;

  res.json({"ipAddress":ipAddress, "Language":language[0], "Software": software});
});


module.exports = app;
