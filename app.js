var express = require('express');
var app = express();

// Define Routes
app.get('/', function(req, res){
	res.send('Thandazile Moyo');
    });

app.listen(3000);
console.log('Listening on port 3000');