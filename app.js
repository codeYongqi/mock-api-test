const express = require('express');
const { router1 } = require('./routes/router1');
const router2 = require('./routes/router2');
const app = express();
const port = 3000

app.use(express.json());
app.use(router1);
app.use(router2);


module.exports = app;
