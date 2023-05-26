const { Router } = require("express");
const { insertAllerta, listAllerte, getAllerta, updateAllerta, deleteAllerta } = require("./allerta.dao");

const rout=Router();

rout.post('/insertAllerta', async(req,res)=>{
    const newAlert = await insertAllerta({
      descrizione : req.body.descrizione,
      data_inizio : req.body.data_inizio,
      data_fine : req.body.data_fine
    }); 
    res.json(newAlert);   
  }) 
  
rout.get('/listAllerte',async(req,res)=>{
    const alerts = await listAllerte({true:true});
    
    res.json(alerts);   
    
  })
   
rout.get('/Allerta/:id',async(req,res)=>{ 
    const alert = await getAllerta({  
      id : req.params.id 
    });
    res.json(alert);
  })
rout.put('/setAllerta/:id',async(req,res)=>{
    const set=await updateAllerta({
      descrizione:req.body.descrizione,
      data_inizio:req.body.data_inizio,
      data_fine:req.body.data_fine
    },{
      id:req.params.id
    });
    res.json(set);
  })
rout.delete('/delAllerta/:id',async(req,res)=>{
    const canc = await deleteAllerta({  
      id : req.params.id
    });
    res.json(canc);
  })

module.exports= rout;
