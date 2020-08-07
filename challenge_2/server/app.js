const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Get request received');
});

app.get('/crypto', (req, res) => {
  const start = req.query.start;
  const end = req.query.end;
  const fetchURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`;
  console.log(fetchURL);
  axios
    .get(fetchURL)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send('Something went wrong, please refresh and try again!');
      throw err;
    });
});

module.exports = app;
