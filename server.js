var express = require('express')
  , app = express()
  , server = require('http').createServer(app).listen(5000)
  , io = require('socket.io').listen(server);

//HTTP static file serving
app.use(express.static(__dirname + '/public'));

// init our data when we turn on the server
var c = 0;

setInterval( function() {
 // emit this data to ALL clients 
 io.sockets.emit('news', { word: c });
  c++;
}, 1000);
