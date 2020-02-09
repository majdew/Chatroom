var express = require('express');
var socket = require('socket.io');

// App setup 
var app = express();
var server = app.listen(3001, function () {
    console.log('listen to request in port number 3001');
});

// static files
app.use(express.static('page'));

// socket setup
var io = socket(server);


io.on('connection' , function(socket){
    console.log('made socket connection');
    console.log(socket.id);
});