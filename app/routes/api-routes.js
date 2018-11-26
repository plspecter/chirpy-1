//Dependencies
//====================

var connection = require("../config/connection.js")

//Routes
//============

module.exports = function (app) {
    //Get all chirps
    app.get("/api/all", function (req, res) {
        var databaseQuery = "SELECT * FROM chirps";

        connection.query(databaseQuery, function (err, result) {
            console.log(err)
            if (err) throw err;
            res.json(result);
        });

    });

    //Add a chirp
    app.post("/api/new", function (req, res) {
        console.log("Chirp Data:");
        console.log(req.body);

        var databaseQuery = "INSERT INTO chirps (authoer, body, created_at VALUES (?,?,?)";
        connection.query(databaseQuery, [req.body.author, req.body.body, req.body.created_at]), function (err, result) {
            console.log(err)
            if (err) throw err;
            console.log("Chirp Successfully saved");
            res.end();
        }

    });
};