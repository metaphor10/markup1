var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var home = require('./routes/index');
var routes = require('./routes/digskills-603/rwd-01/index');
var users = require('./routes/users');
var media1 = require('./routes/digskills-603/jq-mediaelement/about');
var jqNivo = require('./routes/digskills-603/jq-nivo/index');
var jqNivo = require('./routes/digskills-603/jq-fancybox/index');
var galleria = require('./routes/digskills-603/jq-galleria/index');
var backstretch= require('./routes/digskills-603/jq-backstretch/index');



var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', home)
app.use('/digskills-603/rwd-01', routes);
app.use('/digskills-603/jq-mediaelement', media1);
app.use('/users', users);
app.use('/digskills-603/jq-nivo', jqNivo);
app.use('/digskills-603/jq-fancybox', jqNivo);
app.use('/digskills-603/jq-galleria', galleria);
app.use('/digskills-603/jq-backstretch', backstretch);

/// catch 404 and forward to error handler
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
