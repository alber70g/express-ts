import * as express from 'express';
const http = require('http');
const reload = require('reload');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const server = http.createServer();

reload(server, app, 2000, 1000);