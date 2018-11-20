//Static directory to be serverd
app.use(express.static("app/public"));

//Routes 
// =============

require("./app/routes/api-routes.js")(app);

//Starts the server to being listening

app.listen(PORT, function() {
console.log("App listening to PORT: " + PORT);

});

