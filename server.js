var net = require('net');
var clients = [];

function broadcast (msg) {
  clients.map(function(client){
    client.write(msg);
  });
}

var server = net.createServer(function(client) {
  clients.push(client);
  client.on("data", function(data){
    broadcast(data);
  });
});

server.listen(1337, '127.0.0.1');
