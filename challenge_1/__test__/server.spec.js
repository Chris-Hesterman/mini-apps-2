const request = require('supertest');
const app = require('../server/app.js');
const mongoose = require('mongoose');

describe('server', () => {
  afterAll(() => {
    mongoose.connection.close();
  });

  describe('root path', () => {
    it('should respond to GET request', () => {
      return request(app)
        .get('/')
        .then((response) => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

  describe('/events GET request', () => {
    it('should respond to GET request', () => {
      return request(app)
        .get('/events?q=daughter&page=1&limit=4')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body.docs.length).toBeLessThanOrEqual(4);
          expect(response.body.docs[0]).toHaveProperty('event');
          expect(response.body.docs[0]).toHaveProperty('_id');
          expect(response.body.docs[0].event).toHaveProperty('date');
          expect(response.body.docs[0].event).toHaveProperty('description');
        });
    });

    it('GET request should fail without query params', () => {
      return request(app)
        .get('/events')
        .then((response) => {
          expect(response.statusCode).toBe(500);
        });
    });
  });

  describe('/events PUT request', () => {
    it('should update db with user edits', () => {
      return request(app)
        .put('/events')
        .send([
          {
            _id: 2,
            event: {
              date: '-300',
              description:
                'Pyrrhus, the King of Epirus, is taken as a hostage to Egypt after the Battle of Ipsus and makes a diplomatic marriage with the princess Antigone, daughter of Ptolemy and edited-Bernice.',
              lang: 'en',
              category1: 'By place',
              category2: 'Egypt',
              granularity: 'year'
            },
            __v: 0
          }
        ])
        .then((response) => {
          expect(response.status).toBe(200);
          expect(
            JSON.parse(response.text)[0].event.description.indexOf(
              'edited-Bernice'
            )
          ).toBeGreaterThan(-1);
        });
    });
  });
});
