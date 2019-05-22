/* server.js main file */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('req = \n', req);
  res.send('<h1>Test CI with Travis</h1>');
});

const server = app.listen(3002, () => { // NOTE-TO-SELF: Travis uses 3000, do not use this port.
  // eslint-disable-next-line no-console
  console.log('app running on port 3002');
});

// eslint-disable-next-line no-console
console.log('server = ', server);

module.exports = server;
