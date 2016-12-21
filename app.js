// simple proxy example that changes the URL
let http = require('http');
let https = require('https');
let httpProxy = require('http-proxy');

// set these ( can be http or https )
const target = 'http://www.natelewis.net';
const port = 8080;

// get the type of requrest, and its host
var urlArray = target.split('://');
var type = urlArray[0];
var host = urlArray[1]; 

// start the server
httpProxy.createProxyServer({
  target: target,
  agent  : global[type + '.globalAgent'],
  headers: {
    host: host
  }
}).listen(port);

console.log('listening on port ' + port + ' and sending to ' + target);
