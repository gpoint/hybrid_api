var model = require('./model');
var agencyDB = model.db.collection('news');
var ObjectId = model.mongo.Types.ObjectId;

var actions = {

	put: function(params, res){



		agencyDB.insertOne(params , function(err, obj){
			
			console.log(obj);

			res.send(obj.insertedId);
		});

	},

	get: function(id, res){

		// var agency = await 
		agencyDB.findOne(
			{_id: ObjectId(id)},

			function(err, agency){

				res.send(agency);

			}
		);

	},

	subs: function(id, res){

	},

	unsub: function(id, res){

	}

}


module.exports = actions;



