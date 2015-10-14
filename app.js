var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.get('/testsocketio', function(req, res){
  console.log('testsocketio requested');
  io.emit('hook', {
      data: {
        message: 'patata'
      }
    }
  );
  res.send('test message emitted');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
