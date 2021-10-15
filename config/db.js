const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "diagnosis",
  multipleStatements: true,
});

module.exports = connection;
