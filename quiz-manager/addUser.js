var db = require ('./db');
var userService = require("./services/userService");

// full access to read and write
admin_test_user = {
  username: "admin_user",
  password: "admin123",
  role: "admin",
};

// can view questions and answers but can not change
read_test_user = {
  username: "read_user",
  password: "read123",
  role: "read",
};

// can only read questions
restricted_test_user = {
  username: "restricted_user",
  password: "restricted123",
  role: "restricted",
};
  
onSuccess = () => {};
userService.createUser(admin_test_user, onSuccess);
userService.createUser(read_test_user, onSuccess);
userService.createUser(restricted_test_user, onSuccess);

db.end();