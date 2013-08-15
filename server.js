var io = require('socket.io').listen(5000);
// init our data when we turn on the server
var c = 0;

setInterval( function() {
 // emit this data to ALL clients 
 io.sockets.emit('news', { word: c });
  c++;
}, 1000);
