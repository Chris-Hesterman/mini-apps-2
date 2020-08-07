const request = require('supertest');
const app = require('../server/app.js');

describe('Test /crypto', () => {
  test('It should respond to GET request', (done) => {
    request(app)
      .get('/crypto?start=2011-12-12&end=2012-12-12')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('bpi');
        done();
      });
  });
  test('It should require a start and end date', (done) => {
    const res = request(app).get('/crypto');

    res.then((response) => {
      expect(response.statusCode).toBe(200);
    });

    done();
  });
});
