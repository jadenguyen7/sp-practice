var db = require ('../db');
var userService = require("../services/userService");

my_test_user = {
    username: "read_user",
    password: "read123"
  };
  
  onSuccess = () => {};
  userService.createUser(my_test_user, onSuccess);
  

  db.end();