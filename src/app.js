/*

> APP.JS

this file init the server app, make all the setting for the server, and init the routes

*/

// import modules for the server app
const express = require('express');
const cors = require('cors');

// init the server app
const app = express();

// host the API in the port that the sistem give us or in the 4000
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// the route for request and import the response functions and another routes for the route 
// '/api/users'
app.use('/api/users', require('./routes/users'));

// export the server app to the main file
module.exports = app;