const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoding({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Get request received');
});

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('listening on port 3000');
});
