const { Router } = require("express");
const { insertAllerta, listAllerte, getAllerta, updateAllerta, deleteAllerta } = require("./allerta.dao");
const rout=Router();

rout.post('/allerta',async(res,req)=>{
    
})