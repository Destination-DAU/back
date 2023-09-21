const mysql = require("mysql");

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'login_lecture',
});

db.connect();

module.exports = db;
