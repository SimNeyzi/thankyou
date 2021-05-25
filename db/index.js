const mysql = require('mysql');
const {user, database} = require('../config.js');


var connection = mysql.createConnection({
  host: 'localhost',
  user: user,
  database: database,
});


connection.connect();

module.exports = connection;
