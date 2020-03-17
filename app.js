const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

app.get('/', function(req, res) {
  res.send('App launched');
});

app.listen(dotenv, () => console.log(`Front app listening on port ${dotenv}!`));