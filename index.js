var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/auto-complete.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/auto-complete.html'));
});

app.get('/funcionarios', function(req, res) {
    res.json([
		{id:1, nome:"José"},
		{id:2, nome:"João"},
		{id:2, nome:"Maria"},
	]);
});

app.use('/assets', express.static('assets'));


app.listen(8080);