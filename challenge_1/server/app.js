const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/events', (req, res) => {
  const idString = decodeURI(req.query.q);
  res.send(idString);
});

module.exports = app;

