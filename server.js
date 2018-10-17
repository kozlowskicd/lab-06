'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const superagent = require('superagent');
const PORT = process.env.PORT;
const API = process.env.API_URL;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', renderHomepage);
app.get('/categories', renderAllCategories);
app.get('/categories:name', renderTheseProducts);

function renderHomepage(req, res) {
  res.render('site', {page:'./pages/index', title:'Homepage'});
}
function renderAllCategories(req, res) {
  superagent.get(`${API}/categories`)
    .then(data => {
      res.render('site', {page:'./pages/categories', title:'All Categories', categories:data.body});
    })
    .catch(err => console.log(err));
}
function renderTheseProducts(req, res) {
  res.render('site', {page:'./pages/products', title:'Products'});
}
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});