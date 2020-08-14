const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const models = require('../data/models/index.js');
const test = require('../data/seed.js');

if (process.env.node_env === 'test') {
  console.log(test.testSeed);
  test.testSeed();
}

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/events', (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const query = decodeURI(req.query.q);

  if (!page || !limit || !query) {
    res
      .status(500)
      .end('Please refresh and try again. Be sure to submit a query!');
  } else {
    let result = models.getRecords(page, limit, query);

    result
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).end('Please try again, server erred');
      });
  }
});

app.put('/events', (req, res) => {
  let events = req.body.map((event) => {
    return models.updateRecord(event._id, event);
  });

  Promise.all(events)
    .then((responses) => {
      console.log('Server reports items updated');
      res.send(responses);
    })
    .catch((err) => {
      res.status(500).send('Please refresh and try again.');
    });
});

module.exports = app;
