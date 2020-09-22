const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('yeah, it works');
});

app.listen(3000, () => {
  console.log('Server up on port 3000');
});
