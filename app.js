var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

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

app.get('/hookcallback', function(req, res){
  var message = req;
  io.emit('hook', message);
  res.send('message emitted');
});

app.post('/hookcallback', function(req, res){
  var message = req;
  io.emit('hook', message);
  res.send('message emitted');
});

app.put('/hookcallback', function(req, res){
  var message = req;
  io.emit('hook', message);
  res.send('message emitted');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
