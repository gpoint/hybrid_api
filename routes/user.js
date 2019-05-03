var express = require('express');
var router = express.Router();
var actions = require('../actions/user.actions');





/* GET user data. */
router.post('/auth', function(req, res) {

// console.log(req)

	var params = {
		username: {
			username: req.body.username,
			pass: req.body.password
		},
		email: {
			email: req.body.email,
			pass: req.body.password
		}
	}
	actions.auth(params, res);

});


/* GET user data. */
router.put('/', function(req, res) {

	// actions.create({
	// 	username: req.body.username,
	// 	firstname: req.body.firstname,
	// 	lastname: req.body.lastname,
	// 	password: req.body.password,
	// 	email: req.body.email,
	// 	phone: req.body.phone,
	// 	address: {
	// 		postcode: req.body.postcode,
	// 		house: req.body.house,
	// 		city: req.body.city,
	// 		state: req.body.state,
	// 		country: req.body.country
	// 	},
	// }, res);
	res.send(req.body);

});


/* GET user data. */
router.get('/id/:id', function(req, res) {

	console.log(req.params.id);

	actions.get(req.params, res);
  	
});

/* GET user data. */
router.get('/username/:username', function(req, res) {

	console.log(req.params.username);

	actions.get(req.params, res);
  	
});

/* GET user data. */
router.post('/username/:username/interests', function(req, res) {

	console.log(req.params.username);

	actions.update_interests(req.body, res);
  	
});


/* GET user data. */
router.post('/', function(req, res) {
res.send(req.body);
});

/* GET user data. */
router.post('/register', function(req, res) {

	console.log(req.body);
	actions.put(req.body, res);
});


/* GET user data. */
router.delete('/', function(req, res) {
	res.send('delete request respond with a resource');
});

/* GET user data. */
router.get('/all', function(req, res) {
	actions.all(res);
});


/* GET user data. */
router.post('/verify', function(req, res) {
	actions.verify(req.body, res)
});


// /* GET user data. */
// router.post('/', function(req, res) {
//   res.send('post verification respond with a resource;
// });



module.exports = router;
