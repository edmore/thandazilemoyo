// Module Dependencies
var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib');

var app = express();
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

// Configure
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(stylus.middleware({ src: __dirname + '/public', compile: compile }));
app.use(express.static(__dirname + '/public'));

// Define Routes
app.get('/', function (req, res) {
  res.render('index');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

