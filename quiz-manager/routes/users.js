var express = require('express');
var userService = require("../services/userService");
var router = express.Router();

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
      res.redirect('/books');
  }

  userService.validateLogin(req.body, onSuccess)
});

module.exports = router; 