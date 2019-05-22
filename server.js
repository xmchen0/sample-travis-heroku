
/* server.js main file 1.4 */
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001; // NOTE-TO-SELF: Travis uses 3000, do not use this port.

app.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('req = \n', req);
  res.send('Test CI with Travis 1.0');
});

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('app running on port 3001');
});

// eslint-disable-next-line no-console
console.log('server = ', server);

module.exports = server;
