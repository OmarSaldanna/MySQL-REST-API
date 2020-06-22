/*

> USERS.JS

This file declares the other routes for the app, and import the functions for each route

> route: http://localhost:4000/api/users/

*/

// Import the router module from the express library
const { Router } = require('express');

// declare a new route
const router = Router();

// import the db functions for the routes
const { createUser, getUsers, getUserById, getUserByName, updateUserById, deleteUserById, getUsersByCity } = require('../controllers/users.controller');


// append a new route, do not catch any params
router.route('/') // route: '/api/users/'
    // allow mehtods for the route and the functionality
    .get(getUsers)
    .post(createUser)
    // .method(function)

// append a new route that can catch the user's id 
router.route('/:id') // route: '/api/users/{id}/' 
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)

// apend a new route that con catch the username
router.route('/name/:name') // route: '/api/users/name/{name}/' 
    .get(getUserByName)

// append a new route that can catch the user's city
router.route('/city/:city') // route: '/api/users/city/{city}/' 
    .get(getUsersByCity)


// export the route object
module.exports = router;