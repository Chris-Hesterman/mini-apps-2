const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const models = require('../data/models/index.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/events', (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const query = decodeURI(req.query.q);
  let result = models.getRecords(page, limit, query);

  result
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send('Please try again, server erred');
    });
});

app.put('/events', (req, res) => {
  //EACH BODY IS AN OBJECT!!!!
  console.log('server', req.body);
  let events = req.body.map((event) => {
    return models.updateRecord(event._id, event);
  });

  Promise.all(events)
    .then((responses) => {
      console.log('Server reports items updated');
      res.end();
    })
    .catch((err) => {
      res.status(500).send('Please try again');
    });
  console.log(req);
});

module.exports = app;
