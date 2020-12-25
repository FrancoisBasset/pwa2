const express = require('express');
const app = express();

app.listen(80, function() {
	console.log('Start on 80');
});

app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.use('/', require('./routes'));