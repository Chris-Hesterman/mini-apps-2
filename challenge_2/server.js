const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Get request received');
});

app.get('/crypto', (req, res) => {
  res.send(req.query);
});

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('listening on port 3000');
});
