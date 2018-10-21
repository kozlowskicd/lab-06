# Lab 06
## HTTP and REST

This lab covered setting up routes for pulling data from a DB through superagent API calls.  The functions of this lab use the get method to find the data.  JSON-Server is used to serve the DB locally.  Tests are built to assess the functionality of the API calls.

### Functionality

The functions used in the server.js file are all asynchronus functions that takes two parameters, a request and a response.  They are used to query the database based on which element is clicked on the page.  If a category is selected, the page will redirect to display all products with that category.  The user may return to the homepage or to the category list from any point in the site.

### Using this app

Initialize a json-server on port 3000 with data that matches the lab requirements.  Run nodemon on port 8080 in the root directory for the lab.  Open a browser and navigate to http://localhost:8080.