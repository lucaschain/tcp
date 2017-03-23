var net = require('net');

var client = new net.Socket();

var srv = process.argv[2];
var name = process.argv[3];

client.connect(1337, srv, function() {
  client.write(name + " entrou.");
});

client.on('data', function(data) {
  console.log(new Date().toString() + ": " + data);
});

client.on('close', function() {
  console.log('Connection closed');
});
