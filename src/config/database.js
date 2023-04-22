const mysql = require('mysql2/promise')
require('dotenv').config();


const connection = mysql.createPool({
    host: process.env.DB_NAME,
    user: process.env.DB_USER,
    database: process.env.DB
})

module.exports = connection