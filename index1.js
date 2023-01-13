const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
	res.send('Welcome to Echo go to /*anytext* for get response')
});

app.get('/:text', (req, res) => {
	res.set('Content-Type', 'text/plain');
	res.send(req.params.text);
});

app.listen(port, () => {
	console.log('We are live on ' + port);
});