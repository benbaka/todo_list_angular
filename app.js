var http = require('http');
var express = require('express');
var forbidder = require('./forbidder.js');
var app=express();

// Set view engine
app.set('view engine', 'jade');

app.set('views', './views')

// call the static views
app.use(express.static("./public"));
app.use(express.static("./files"));
app.use(express.static("./downloads"));


// Load the routes
var routes = require("./routes")(app);

//app.use(forbidder("Wednesday"));


http.createServer(app).listen(3000, function(){
    console.log("Express server listening on port "+ 3000);

});
