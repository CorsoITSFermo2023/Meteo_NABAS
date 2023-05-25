const express = require('express')
const bodyParser = require('body-parser');
const { initStruct } = require('./init-struct');
const { insertPrevisione, listPrevisioni, getPrevisione, updatePrevisione, deletePrevisione  } = require("./previsione.dao");
const port = 3000;

const app = express();

app.post('/inserisciPrevisione', async (req,res) => {
    const newForecast = insertPrevisione();
    res.end();
})

initStruct().then(
    () => app.listen(port)
  );