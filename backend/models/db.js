// importing mysql module
const mysql = require('mysql');
const dbConfig = require("../db.config.js");

//configuting mysql connections
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    database: dbConfig.DB,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD
});

//connecting the connection and testing it
connection.connect(function (err) {
    if (err) {
        console.log("Error occurred while connecting");
        throw err;
    }
    else {
        console.log("Connection est. with MySQL successfully");
    }
});

module.exports = connection;