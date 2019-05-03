var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hybrid Sales' });
});


// var agency = require('./agency');
var item = require('./item');
var user = require('./user');
var enquiry = require('./enquiry');
var news = require('./news');


module.exports = {
	index: router,
	// agency: agency,
	item: item,
	user: user,
	news: news,
	enquiry: enquiry
};
