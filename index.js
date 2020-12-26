const express = require('express');
const app = express();

app.listen(3000, function() {
	console.log('Start on 3000');
});

app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.use('/', require('./routes'));