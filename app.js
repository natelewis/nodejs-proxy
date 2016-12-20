let http = require('http');
let httpProxy = require('http-proxy');

const targetServer = 'http://127.0.0.1:5005';
const listenPort = 5050;

// Create a proxy server with custom application logic
let proxy = httpProxy.createProxyServer({});

// Create server
let server = http.createServer(function(req, res) {

    // Do custom stuff here

    proxy.web(req, res, {target: targetServer});

});

console.log('listening on port ' + listenPort);
server.listen(listenPort);
