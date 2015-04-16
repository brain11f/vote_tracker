var http = require('http');

function orRequest(request, response) {
  console.log('A user made a request' + request.url);
  response.writeHead(200, {'Context-Type': 'text/plain'});
  response.write('Here is some data');
  response.end();
}

http.creatServer(orRequest).listen(8888);
console.log('Server is running!');
