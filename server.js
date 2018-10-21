'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const superagent = require('superagent');
const API = process.env.API_URL;

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.get('/', renderHomepage);
app.get('/categories', renderAllCategories);
app.get('/products/:categoryName', renderTheseProducts);

// Async function to render homepage.  Takes request and response parameters and renders the site when the home address is called.
function renderHomepage(req, res) {
  res.render('site', {page:'./pages/index', title:'Homepage'});
}
// Async function to show all categories.  Takes request and response parameters.  Queries all categories from the DB and renders the site with all categories listed.
function renderAllCategories(req, res) {
  superagent.get(`${API}/categories`)
    .then(data => {
      res.render('site', {page:'./pages/categories', title:'All Categories', categories:data.body});
    })
    .catch(err => console.log(err));
}
//Async function to show the products of a specific category.  Takes request and response parameters.  Takes the name of a clicked category and queries the DB with that name.  Returns all products that share that category name.
function renderTheseProducts(req, res) {
  superagent.get(`${API}/products?category=${req.params.categoryName}`)
    .then(data => {
      res.render('site', {page:'./pages/products', title:'Products', products:data.body});
    })
    .catch(err => console.log(err));
}

// This exports a server start function, and sets the outside variable server to be equivalent to app.
module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};