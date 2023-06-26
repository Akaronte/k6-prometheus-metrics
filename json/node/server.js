var http = require('http');
var fs = require('fs');
console.log('Server will listen at :  127.0.0.1:9090 ');
http.createServer(function (req, res) {
	//change the MIME type to 'application/json' 
    res.writeHead(200, {'Content-Type': 'application/json'});
    //Create a JSON
	let json_response = [
		// {
		//   "noun": "lion",
		//   "population": 123,
		//   "predator": true
		// },
		// {
		//   "noun": "deer",
		//   "population": 456,
		//   "predator": false
		// },
		// {
		//   "noun": "pigeon",
		//   "population": 789,
		//   "predator": false
		// },
		{
			"val": 7,
			"status": "success",
			"data": {
				"resultType": 8,
				"result": [
					{
						"metric": {
							"__name__": "k6_vus",
							"testid": "k6-111",
							"val": 4
						},
						"value": [
							1687768382.135,
							"1"
						]
					}
				]
			}
		}
	  ]
	// let json_response = {
	// 	"status": "success",
	// 	"data": {
	// 		"resultType": "vector",
	// 		"result": [
	// 			{
	// 				"metric": {
	// 					"__name__": "k6_vus",
	// 					"testid": "k6-111"
	// 				},
	// 				"value": [
	// 					1687768382.135,
	// 					"1"
	// 				]
	// 			}
	// 		]
	// 	}
	// }
	console.log('Server Running');
	res.end( JSON.stringify(json_response) ); 
}).listen(9090);