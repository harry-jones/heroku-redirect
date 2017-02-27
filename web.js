var express = require('express');

var app = express(express.logger());

app.get('*', function(request, response) {
  response.redirect(301, process.env.NEW_BASE_URL + request.url)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});