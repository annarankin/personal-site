var express = require('express');
var app = express();
var ejs = require('ejs');
var port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log('Up and running on %s!', port);
});