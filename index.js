const express = require('express');
const bodyParser = require('body-parser');
const { initStruct } = require('./init-struct');
const routerPrevisione = require('./routerPrevisione');
const routerAllerte = require ('./routerAllerte');


const port = 3000;

const app = express();
app.use(bodyParser.json());

app.use('/previsione', routerPrevisione);
app.use('/allerta' , routerAllerte);

initStruct().then(
    () => app.listen(port)
  );