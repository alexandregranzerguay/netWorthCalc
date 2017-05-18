'use strict';
var express = require('express');
var app = express();

const port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/js', express.static(__dirname + '/public/js'));

app.listen(port, function(){
    console.log(`Static files available at http://localhost:${port}/`);
});