var model = require('./model');
var userDB = model.db.collection('user');
var ObjectId = model.mongo.Types.ObjectId;

var actions = {

	put: function(params, res){

		userDB.insertOne(params , function(err, obj){
			
			console.log(obj);

			res.send({
				username: params.username,
				id: obj.insertedId
			});
		});

	},

	get: function(params, res){

		// res.send(ObjectId(id));
		// var user = await 
		userDB.findOne(
			params,

			function(err, user){

				console.log(err);
				console.log(user);
				if(user != null) {

					res.send({user: user});
				}else{

					res.send({err: err});
				}
			}
		);

	},

	update_interests: function(params, res){
		console.log(params)
		userDB.updateOne({"username" : params.username}, {"$set" : {interests: params.interests}}, function(err, updt){
			// console.log(err);
				console.log(updt);
				if(updt != null) {

					res.send({success: true});
				}else{

					res.send({err: err});
				}
		});
	},

	auth: function(params, res){

		// params['username'] = email;
		console.log(params)

		userDB.findOne(
			params.username,

			function(err, user){

				if(user != null){
					console.log(user);
					res.send({
						success: true,
						user: user
					});
				}else{
					console.log(err);
					// res.send(err);
					userDB.findOne(
						
						params.email,

						function(err, user){
							if(user != null){
								console.log(user);
								res.send({
									success: true,
									user: user
								});
							}else{
								res.send({suscces: false});
								console.log(err);
							}
						}
					);
				}
			}
		);

	},

	verify: function(params, res){
		
		userDB.findOne(

			params,

			function(err, user){

				if(user != null) {

					res.send({exists: true});
				}else{
					
					res.send({exists: false});
				}
			}
		);
	},

	all: function(res) {
		

		userDB.find(function(value){

			res.send({value: value});
		});

	}

}


module.exports = actions;


