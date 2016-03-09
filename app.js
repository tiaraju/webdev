var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  return res.sendFile(path.join(__dirname+'/../public/index.html'));
});

app.listen(5000);
