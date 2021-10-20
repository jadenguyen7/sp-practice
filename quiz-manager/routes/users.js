var express = require('express');
var userService = require("../services/userService");
var router = express.Router();
require("dotenv").config()
var jwt = require('jsonwebtoken');

router.get('/login', function(req, res, next) {
  res.render('users/login');
});

router.post('/', function(req, res) {
  function onSuccess(result) {
      res.redirect('/users');
  }

  userService.createUser(req.body, onSuccess)
});

router.post('/login', function(req, res, next) {
  function onSuccess(success, user) {
    if (!success) {
      res.render('error', { message: 'No valid user', error: {title: 'User not recognised', message: ''} });
      return;
    } 
      const token = jwt.sign({ 
        user: {
          username: user.username
        }
      },
      // Your secret, e.g. here set by environment variable
      process.env.AUTH_SECRET);
      
      res.cookie('token', token);

      res.redirect('/quiz/quiz');
  }

  userService.validateLogin(req.body, onSuccess)
});

module.exports = router; 
