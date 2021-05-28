const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// DRIVER FOR MONGODB
var mongoose = require("mongoose");

// WHERE MONGOOSE IS LIVING
mongoose
  .connect("mongodb://localhost:27017/express-mongodb-recipe", {
    useNewUrlParser: true, // ADD ERRORS MESSAGES
    useUnifiedTopology: true, // REMOVES ERROR MESSAGES
  })
  .then(() => { // PROMISES
    console.log(`MONGODB CONNECTED`);
  })
  .catch(function (e) {
    console.log(e);
  });
// MONGODB ATLAS

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recipe = require("./routes/recipe/recipeRouter");

const app = express();

// VIEW ENGINE SETUP
// DELETED 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// DELETED EXPRESS STATIC FILE 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/recipe', recipe);

//CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function(req, res, next) {
  next(createError(404));
});

// ERROR HANDLER
app.use(function(err, req, res, next) {
  // SET LOCALS, ONLY PROVIDING ERROR IN DEVELOPMENT
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // RENDER THE ERROR PAGE
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
