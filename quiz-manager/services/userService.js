var mysql = require('mysql2');
var db = require('../db');
var bcrypt = require('bcrypt');

// turn password into a hash password
function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
}

// inserting a new user into the users database
function createUser(user, onSuccess) {
    var sql = "INSERT INTO `quiz-manager-test`.`users` (`id`, `username`, `password`, `role`) VALUES (?, ?, ?, ?)";
    var inserts = [user.id, user.username, hashPassword(user.password), user.role];
    var preparedSql = mysql.format(sql, inserts);
    db.query(preparedSql, onSuccess);
}

// checking the user login is valid
function validateLogin(user, onSuccess) {
    // find the user
    var sql = "SELECT * FROM `users` WHERE username = ?";
    var inserts = [user.username];
    var preparedSql = mysql.format(sql, inserts);

    console.log(user);

    // React to query
    function onFindingUser(result){

        console.log(result);
        
        if (!result || result.length != 1) {
            onSuccess(false, null);
            return;
        }
        var passwordCorrect = bcrypt.compareSync(user.password, result[0].password);

        onSuccess(passwordCorrect, result[0]);
    }
    db.query(preparedSql, onFindingUser);
}

function findUser(username, onSuccess) {
    var sql = "SELECT * FROM `users` WHERE username = ?";
    var inserts = [username];
    var preparedSql = mysql.format(sql, inserts);

    // React to query
    function onResult(result) {
        console.log('This is the result', result)
        if (result && result.length > 0) {
            onSuccess(null, result[0])
        }
        // else onSuccess("No such user", null)
        else onSuccess("No such user", null)
    };
    db.query(preparedSql, onResult);
    console.log('End of findUser')
}

module.exports.createUser = createUser;
module.exports.validateLogin = validateLogin;
module.exports.findUser = findUser;