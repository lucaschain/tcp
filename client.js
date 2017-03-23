var net = require('net');
process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

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

process.stdin.on('data', function (text) {
  client.write(text);
});
