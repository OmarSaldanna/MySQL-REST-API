/*

USERS.CONTOLLER.JS

This file contains and export the functions for the route of users

*/

// import the module
const mysql = require('mysql');

// a function for connect to db
function connectDB(){ 
    // create a connection
    const conn = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: "api_rest"
    });
    // return the connection
    return conn;
}

// create an object to export the db functions
const DB = {};

// get, get all the users
DB.getUsers = (req, res) => {
    // create a connection
    const conn = connectDB();
    // execute the query
    conn.connect(function(err) {
        if (err) throw err;
        // create a query
        const query = "SELECT * FROM users";
        // execute the query
        conn.query(query, (err, result) => {
            if (err) throw err;
            // send a response
            res.json(result);
        });
    });
}

// post, create an user
DB.createUser = (req, res) => {
    // create a connection
    const conn = connectDB();
    // get the user data
    const { firstname, lastname, city } = req.body;
    // execute the query
    conn.connect(function(err) {
        if(err){throw err;}
        // define a query
        const query = "INSERT INTO users VALUES(NULL,'" + firstname + "','" + lastname + "','" + city + "');";
        // execute the query
        conn.query(query, (err, result) => {
            if (err) throw err;
            // send a response
            res.json({message:"user created"});
        });
    });
}

// get + id, get an user by id
DB.getUserById = (req, res) => {
    // create a connection
    const conn = connectDB();
    // get the id
    const id = req.params.id;
    // execute the query
    conn.connect(function(err) {
        if (err) throw err;
        // create a query
        const query = "SELECT * FROM users WHERE id = " + id + ";";
        // execute the query
        conn.query(query, (err, result) => {
            if (err) throw err;
            // send a response
            res.json(result);
        });
    });
}

// put + id, update an user
DB.updateUserById = (req, res) => {
    // create a connection
    const conn = connectDB();
    // get the user data
    const { firstname, lastname, city } = req.body;
    // get the user id
    const id = req.params.id;
    // execute the query
    conn.connect(function(err) {
        if(err){throw err;}
        // define a query
        const query = "UPDATE users SET firstname = '" + firstname + "', lastname = '" + lastname + "', city = '" + city + "' WHERE id = " + id + ";";
        // execute the query
        conn.query(query, (err, result) => {
            if (err) throw err;
            // send a response
            res.json({message:"user updated"});
        });
    });
}

// delete + id, delete an user
DB.deleteUserById = (req, res) => {
    // create a connection
    const conn = connectDB();
    // get the user id
    const id = req.params.id;
    // execute the query
    conn.connect(function(err) {
        if(err){throw err;}
        // define a query
        const query = "DELETE FROM users WHERE id = " + id + ";";
        // execute the query
        conn.query(query, (err, result) => {
            if (err) throw err;
            // send a response
            res.json({message:"user deleted"});
        });
    });
}

// get + name, get an user by his name
DB.getUserByName = (req, res) => {
    // create a connection
    const conn = connectDB();
    // get the name
    const name = req.params.name;
    // execute the query
    conn.connect(function(err) {
        if (err) throw err;
        // create a query
        const query = "SELECT * FROM users WHERE firstname = '" + name + "';";
        // execute the query
        conn.query(query, (err, result) => {
            if (err) throw err;
            // send a response
            res.json(result);
        });
    });
}

// get + city, get an user by his city
DB.getUsersByCity = (req, res) => {
    // create a connection
    const conn = connectDB();
    // get the city
    const city = req.params.city;
    // execute the query
    conn.connect(function(err) {
        if (err) throw err;
        // create a query
        const query = "SELECT * FROM users WHERE city = '" + city + "';";
        // execute the query
        conn.query(query, (err, result) => {
            if (err) throw err;
            // send a response
            res.json(result);
        });
    });
}


// export the module with functions
module.exports = DB;