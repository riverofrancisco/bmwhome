const express = require('express');
const bodyParser = require('body-parser');
require('./db.js');
const routes = require('./routes/index.js');

let server = express();
server.use(bodyParser.json());
server.use('/', routes);

module.exports = server;
