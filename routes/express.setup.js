var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var setup = express();
setup.use(bodyParser.json());
setup.use(bodyParser.urlencoded());
setup.use(cookieParser());

module.exports = {express, setup};