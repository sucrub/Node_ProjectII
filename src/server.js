const express = require('express');
const app = express();
const path = require('path');
const configViewEngine = require('./config/viewEngine')
// require('dotenv').config();
const dotenv = require('dotenv')
const connection = require('./config/database')
dotenv.config();
const port = process.env.PORT || 4000
const hostname = process.env.HOST_NAME
const webRoutes = require('./routes/web');
const { log } = require('console');

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({extended: true})) // for form data

// Config template engine
configViewEngine(app);
// Khai bao route
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example is running on ${hostname}:${port}`)
})