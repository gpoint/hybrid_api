var model = require('./model');
var userDB = model.db.collection('item');
var ObjectId = model.mongo.Types.ObjectId;

var actions = {

	put: function(params, res){



		userDB.insertOne(params , function(err, obj){
			
			console.log(obj);

			res.send(obj.insertedId);
		});

	},

	get: function(params, res){

		// var user = await 
		userDB.findOne(
			{_id: ObjectId(id)},

			function(err, user){

				res.send(user);

			}
		);

	}

}


module.exports = actions;



