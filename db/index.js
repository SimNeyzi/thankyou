const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'thankyous'
})

connection.connect();

module.exports = connection;