const express = require('express');

const Vigenere = require('caesar-salad').Vigenere;

const app = express();

const port = 8000;

const password = 'well';

const text = '<h1>Welcome to Cipher</h1> <p>go to /encode/<i>*sometext*</i> for cipher <i>*sometext*</i>' +
	' <br> or /decode/<i>*cipher*</i> for decipher <i>*cipher*</i></p>'


app.get('/', (req, res) => {
	res.send(text);
});

app.get('/encode/:text', (req, res) => {
	res.send(Vigenere.Cipher(password).crypt(req.params.text));
});

app.get('/decode/:cipher', (req, res) => {
	res.send(Vigenere.Decipher(password).crypt(req.params.cipher));
});


app.listen(port, () => {
	console.log('We are live on ' + port);
});