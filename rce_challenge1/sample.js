
// var request = require('request');
data = {
    "detail": "detail",
    "menu": "name",
    "name": "kurenaif",
}

var request = require('request');
var options = {
	uri: "http://localhost:49160",
  headers: {
    "Content-type": "application/json",
  },
  json: data
};
request.post(options, function(error, response, body){
	console.log(body)
});
