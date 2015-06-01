var express = require("express");
var path = require('path');
var web = express();
var server;
var port = process.env.BASKET_APP_PORT;

server = web.listen(port, function(){
  console.log("the server is good to go :3");
});

web.get("/", function(req, res){
  res.sendFile( __dirname + "/views/layout.html");
});

web.use(express.static(__dirname + '/public'));

web.use('/elements',  express.static(__dirname + '/views/elements'));
web.use('/bower_components',  express.static(__dirname + '/bower_components'));