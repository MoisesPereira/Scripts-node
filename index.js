var express = require('express');
var app = express();

// Rota principal
app.get('/', function(req, res) {
	res.send('Sua Api');
});

var users = [
	{ id: 1, username: "Manuela", email: "manuela@teste.com" },
	{ id: 2, username: "Madalena", email: "madalena@teste.com" }
];

// End Point da API
app.get('/api/users', function(req, res, next) {
	res.send(users);
})

// Start da aplicação
app.listen(9000);
console.log("Rodando em: http://localhost:9000/");