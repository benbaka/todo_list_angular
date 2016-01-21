var http = require('http');
var express = require('express');
var app=express();

http.createServer(app).listen(3000, function(){
    console.log("Express server listening on port "+ 3000);

});
