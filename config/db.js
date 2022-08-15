require('dotenv').config() // Environment Variable
const mysql = require('mysql')

const dbconnection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
});

module.exports = dbconnection;