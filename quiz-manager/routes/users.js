var express = require('express');
var userService = require("../services/userService");
var router = express.Router();
require("dotenv").config()
var jwt = require('jsonwebtoken')

router.get("/", async (req, res, next) => {
  res.send("users");
});


// when you go two path http://localhost:3000/users/login - render 'users/login.hbs'
// router.get('/login', function(req, res, next) {
//   res.render('users/login.hbs');
// });

// router.post('/', function(req, res) {
//   function onSuccess(result) {
//       res.redirect('/users');
//   }

//   userService.createUser(req.body, onSuccess)
// });

// users/login
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

      res.redirect('/quiz');
  }

  userService.validateLogin(req.body, onSuccess)
});

module.exports = router; 
