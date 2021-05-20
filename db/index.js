const mysql = require('mysql');
const config = require('../config.js');


const connection = mysql.createConnection(config.connect);

connection.connect();

module.exports = connection;
