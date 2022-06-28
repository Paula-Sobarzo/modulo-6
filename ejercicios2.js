var http = require('http');
var url = require('url');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  let q=url.parse(request.url,true);
  let recurso = q.pathname;
  response.write(recurso);
  response.end('Hello World');
}).listen(8083);

console.log('servidor iniciado');