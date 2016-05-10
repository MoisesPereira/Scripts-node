var express = require('express');
var request = require('request');
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

app.get('/api/articles', function(req, res){
	request('https://obscura.zendesk.com/api/v2/help_center/articles.json', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    //console.log(body) // Print the google web page.
	    res.send(body);
	  }
	})
})



// Start da aplicação
app.listen(9000);
console.log("Rodando em: http://localhost:9000/");