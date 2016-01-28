var http = require('http');
var express = require('express');
var forbidder = require('./forbidder.js');
var app=express();

// Load the routes
var routes = require("./routes")(app);

//app.use(forbidder("Wednesday"));


http.createServer(app).listen(3000, function(){
    console.log("Express server listening on port "+ 3000);

});
