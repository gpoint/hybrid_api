var express = require('express');
var router = express.Router();
var actions = require('../actions/enquiry.actions')





/* GET user data. */
router.post('/auth', function(req, res) {

	actions.authenticate({
		username: req.param('username'),
		password: req.param('password')
	}, res );

});


/* GET user data. */
router.put('/', function(req, res) {

	actions.create({
		username: req.param('username'),
		firstname: req.param('firstname'),
		lastname: req.param('lastname'),
		password: req.param('password'),
		contact: {
			email: req.param('email'),
			phone: req.param('phone')
		},
		address: {
			postcode: req.param('postcode'),
			house: req.param('house'),
			city: req.param('city'),
			state: req.param('state'),
			country: req.param('country')
		},
	}, res);

});


/* GET user data. */
router.get('/id/:id', function(req, res) {

	var id = req.params.id;

	console.log(id);

	actions.fetch(id, res);
  	
});


/* GET user data. */
router.post('/', function(req, res) {

	console.log(req.body)

	actions.create(req.params, res);
});


/* GET user data. */
router.delete('/', function(req, res) {
  res.send('delete request respond with a resource');
});


/* GET user data. */
router.post('/verify', function(req, res) {
  res.send('post verification respond with a resource');
});


// /* GET user data. */
// router.post('/', function(req, res) {
//   res.send('post verification respond with a resource');
// });



module.exports = router;
