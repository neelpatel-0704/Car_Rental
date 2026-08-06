var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const flash = require("connect-flash")


var app = express();
app.use(flash()); 


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var HomeRouter = require('./routes/Home');
var LoginRouter = require('./routes/Login');
var ForgetPassRouter = require('./routes/ForgetPass');
var RegistrationRouter = require('./routes/Registration');
var Add_carRouter = require('./routes/Add_car');
var Feed_backRouter = require('./routes/Feed_back');
var Admin_feedRouter = require('./routes/Admin_feed');
var E_bookRouter = require('./routes/E_book');
var ProfileRouter = require('./routes/Profile');
var Feed_back_historyRouter = require('./routes/Feed_back_history');
var Admin_profileRouter = require('./routes/Admin_profile');
var AdminRouter = require('./routes/Admin');
var HelpRouter = require('./routes/Help');
var Site_mapRouter = require('./routes/Site_map');
var Admin_ebookRouter = require('./routes/Admin_ebook');
var About_usRouter = require('./routes/About_us');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Express.js application, use middleware to serve static files:
app.use('/Images', express.static('Images'));
app.use('/Profile', express.static('Profile'));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', HomeRouter);
app.use('/Login', LoginRouter);
app.use('/ForgetPass',ForgetPassRouter );
app.use('/Registration',RegistrationRouter);
app.use('/Add_car', Add_carRouter);
app.use('/Feed_back',Feed_backRouter);
app.use('/Admin_feed',Admin_feedRouter);
app.use('/E_book',E_bookRouter);
app.use('/Profile',ProfileRouter);
app.use('/Feed_back_history',Feed_back_historyRouter);
app.use('/Admin_profile',Admin_profileRouter);
app.use('/Admin',AdminRouter);
app.use('/Help',HelpRouter);
app.use('/Site_map',Site_mapRouter);
app.use('/Admin_ebook',Admin_ebookRouter);
app.use('/About_us',About_usRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
