const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport  = require('passport');
const User = require('./components/user/userModel');
const session = require('express-session');
const mongoose = require('mongoose');


// Require Routes
const user = require('./routes/userRoutes');
const profile = require('./routes/profileRoutes');

const app = express();
mongoose.connect('mongodb://localhost:27017/test', 
{useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
  if(err) return console.log("error al conectar a la base de datos ", err);
  console.log("Conexión con la base de datos establecida...");
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected! ");
});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure Passport and Sessions
app.use(session({
  secret: '123',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', user);
app.use('/profile', profile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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
