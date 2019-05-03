var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDBString = 'mongodb://localhost/hybrid_sales';

mongoose.connect(mongoDBString, {
	useNewUrlParser: true
});

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
	db: db,
	mongo: mongoose
};








