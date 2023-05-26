const express = require('express');
const bodyParser = require('body-parser');
const { initStruct } = require('./init-struct');
const { insertPrevisione, listPrevisioni, getPrevisione, updatePrevisione, deletePrevisione  } = require("./previsione.dao");
const routerPrevisione = require('./routerPrevisione');
const{insertAllerta,listAllerte,getAllerta,updateAllerta,deleteAllerta}=require("./allerta.dao");
const{smartInsert,smartSelect, smartDelete, smartUpdate}=require('./db-smart');
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.post('/insertAllerta', async(req,res)=>{
  const newAlert = await insertAllerta({
    descrizione : req.body.descrizione,
    data_inizio : req.body.data_inizio,
    data_fine : req.body.data_fine
  }); 
  res.json(newAlert);   
}) 

app.get('/listAllerte',async(req,res)=>{
  const alerts = await listAllerte({true:true});
  
  res.json(alerts);
  
})

app.get('/Allerta/:id',async(req,res)=>{ 
  const alert = await getAllerta({  
    id : req.params.id
  });
  res.json(alert);
})
app.put('/setAllerta/:id',async(req,res)=>{
  const set=await updateAllerta({
    descrizione:req.body.descrizione,
    data_inizio:req.body.data_inizio,
    data_fine:req.body.data_fine
  },{
    id:req.params.id
  });
  res.json(set);
})
app.delete('/delAllerta/:id',async(req,res)=>{
  const canc = await deleteAllerta({  
    id : req.params.id
  });
  res.json(canc);
})

app.use('/previsione', routerPrevisione )
 
initStruct().then(
    () => app.listen(port)
  );