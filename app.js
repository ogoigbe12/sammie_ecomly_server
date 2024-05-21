const express = require('express');
require('dotenv/config');

const app = express();
const env = process.env;
// Start the server
// localhost >> 192.168.0.0
const hostname = env.HOST;
const port = env.PORT;


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});