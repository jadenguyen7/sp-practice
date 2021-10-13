require("dotenv").config();
var mysql = require('mysql2');

var connection = mysql.createConnection({
    host:'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database:'quiz-manager-test'
});

connection.connect(function(error){
    if(!!error) {
        console.log(error);
    } else {
        console.log('Connected!');
    }
});

function query(sql, onResult) {
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        onResult(results);
    });
}

module.exports.query = query;