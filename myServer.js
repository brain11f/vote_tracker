'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// app.get('/greet', function(request, response) {
//   response.status(200).send('<h1>Hello Stranger!</h1>');
// });

// app.get('/greet/:person', function(req, res) {
//   res.send('<h1>Hello ' + req.params.person + '</h1>');
// });
app.set('port', (process.env.PORT || 5000));

app.get('/*', function(req, res) {
  res.status(404).send('could not find page');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

