'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const superagent = require('superagent');
const PORT = process.env.PORT;
const API = process.env.API_URL;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (rec, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

