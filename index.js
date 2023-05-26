const express = require('express')
const bodyParser = require('body-parser');
const { initStruct } = require('./init-struct');
const { insertPrevisione, listPrevisioni, getPrevisione, updatePrevisione, deletePrevisione  } = require("./previsione.dao");
const routerPrevisione = require('./routerPrevisione');
const port = 3000;

const app = express();

app.use('/previsione', routerPrevisione )
 
initStruct().then(
    () => app.listen(port)
  );