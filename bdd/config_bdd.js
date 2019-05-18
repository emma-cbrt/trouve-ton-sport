var path = require('path');
var bdd = require(path.join('./../config/bdd')).bdd;
var mysql = require('mysql');

// create connection to database

// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
var bdd = mysql.createConnection ({
    host: bdd.host,
    user: bdd.user,
    password: bdd.password,
    database: bdd.database
});

// connect to database

bdd.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = bdd;