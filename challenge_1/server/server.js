const app = require('./app.js');

console.log(process.env.node_env);
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
