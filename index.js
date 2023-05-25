const express = require('express')
const bodyParser = require('body-parser');
const { initStruct } = require('./init-struct');
const port = 3000;

const app = express();

initStruct().then(
    () => app.listen(port)
  );