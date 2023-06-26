var http = require('http');
var fs = require('fs');
console.log('Server will listen at :  127.0.0.1:9090 ');
http.createServer(function (req, res) {
	//change the MIME type to 'application/json' 
    res.writeHead(200, {'Content-Type': 'application/json'});
    //Create a JSON
	let json_response = [
		{
		  "noun": "lion",
		  "population": 123,
		  "predator": true
		},
		{
		  "noun": "deer",
		  "population": 456,
		  "predator": false
		},
		{
		  "noun": "pigeon",
		  "population": 789,
		  "predator": false
		}
	  ]
	console.log('Server Running');
	res.end( JSON.stringify(json_response) ); 
}).listen(9090);