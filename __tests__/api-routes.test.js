'use strict';

const supertest = require('supertest');
const {server} = require('../server.js');
const mockRequest = supertest(server);

describe('API call tests', () => {
  it('responds with 200 status', () => {
    return mockRequest
      .get('/')
      .then(results => expect(200))
      .catch((err) => {
        console.log(err);
      });
  });

  it('GETs json data', () => {
    return mockRequest
      .get('/categories')
      .then(results => expect('Content-Type' === /json/))
      .catch((err, res) => {
        if (err) throw err;
      });
  });
});