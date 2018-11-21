//Initiates the connection to mysql

//Require our node modules
var mysql = require("mysql");

//Set up our connection information 
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "chirpyy"  
})

//Connect to the mysql database

connection.connect(function(err) {
if (err) {
    console.error("error connecting:" + err.stack);
    return;
} 

console.log("connected as id" + connection.threadId);

});

//Export the connection

module.exports = connection;