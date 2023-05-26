const { Router } = require("express");

const router= Router


router.post('/Previsione', async (req,res) => {
    const forecast = {
        previsione : req.body.previsione,
        temperatura : req.body.temperatura,
        umidita : req.body.umidita,
        uv : req.body.uv,
        data : req.body.data,
        fascia_oraria : req.body.fascia_oraria,
        provincia : req.body.provincia
    }
    const newForecast = await insertPrevisione(forecast);
    res.end();
})

router.get('/Previsione/:provincia', async (req,res) => {
    const lista = await listPrevisioni({
        provincia : req.params.provincia
    })
    res.json(lista);
})

router.delete('/Previsione/del/:provincia', async (req,res) => {
    const deletee = await deletePrevisione({
        provincia : req.params.provincia
    })
    res.end();
})

router.put('/Previsione/modifica', async(req,res) => {

})
