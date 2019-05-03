// import * as emailjscom from 'emailjs-com';
// global.emailjs = emailjscom;

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
// app.use(bodyParser);
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  // res.header('Access-Control-Allow-Headers', 'Content-Type, ');

  console.log(req)
      
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      // res.sendStatus(200);
      res.send("GET, PUT, POST, DELETE")
    }  
  next();
});
// app.options('/', function(req, res) {
//     res.send(200);
// });
var routes = require('./routes/index');

app.use('/', routes.index);
// app.use('/agency', routes.agency);
app.use('/item', routes.item);
app.use('/user', routes.user);
app.use('/news', routes.news);
app.use('/enquiry', routes.enquiry);
// app.use('/', routes.index);



/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
