var express = require("express");

var app = express();

app.get('/', function(req,res){
	res.send("<h2>Hi there, thanks for checking out my work. The server that is responding to you is developed using 'express.js' module in node.js. Please type 'localhost:3000/one' in your URL search bar to view the next page.</h2>");
});


app.get('/one', function(req,res){
	res.send("<h2>Have a nice day</h2>");
});

app.listen(3000,function(){
	console.log("Server listening on port: 3000");
});