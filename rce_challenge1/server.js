const express = require('express');
const bodyParser = require('body-parser');

// Constants

let user = { "detail": { "name": "kurenaif" } };
let settings = {
  host: "0.0.0.0",
  port: 8080
}

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  if (process.env.IS_DEBUG === "true") {
    res.send("Congrats");
  } else {
    res.send('Hello World');
  }
});

app.post('/', (req, res) => {
  const detail = req.body.detail;
  const menu = req.body.menu;
  const name = req.body.name;
  user[detail][menu] = name;
  res.send('your name:' + user[detail][menu]);
});

app.listen(settings.port, settings.host, () => {
  console.log(`Running on http://${settings.host}:${settings.port}`);
});
