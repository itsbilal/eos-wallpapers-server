// 
// Copyright (C) 2013 Bilal Akhtar <me@itsbilal.com>


var express = require('express');
var app = express();
var router = require('./router');
var model = require('./model');

model.DB(function(db_) {
    router.route(app, db_);
});

/*app.get("/", function(req,res) {
	res.send("Hello World!");
}])*/
app.use(express.bodyParser());

app.listen(8080);
console.log('Listening on port 8080');
