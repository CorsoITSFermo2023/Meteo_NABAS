const { Router } = require("express");
const { insertPrevisione, listPrevisioni,deletePrevisione, updatePrevisione } = require("./previsione.dao");

const router= Router()


router.post('/post', async (req,res) => {
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

router.get('/:provincia', async (req,res) => {
    const lista = await listPrevisioni({
        provincia : req.params.provincia
    })
    res.json(lista);
})

router.delete('/:provincia', async (req,res) => {
    const deletee = await deletePrevisione({
        provincia : req.params.provincia
    })
    res.end();
})

router.put('/:id', async(req,res) => {
    const modifica= await updatePrevisione({
        previsione: req.body.previsione,
        temperatura: req.body.temperatura,
        umidita: req.body.umidita,
        uv: req.body.uv,
        data: req.body.data,
        fascia_oraria: req.body.fascia_oraria,
        provincia: req.body.provincia
    }, {
        id: req.params.id
    })
    res.json(modifica)
})

module.exports= router
