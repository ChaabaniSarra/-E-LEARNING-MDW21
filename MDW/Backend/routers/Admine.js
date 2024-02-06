const express = require('express');

const router = express.Router();

const Admine =require('../Models/Admine')




// router.post('/add' , (req,res)=>{
//     data=req.body 
//     usr =new Admine( data) ;
//     usr.save()
//     .then((saveAdmine)=> {
//     res.status(200).send(saveAdmine)
        
//     })
//     .catch ((err)=> res.status(400).send("Err"));
//     })
    
    
    
    
   router.get('/getallT' , ()=>{
    
        console.log('get work  ')
    })
    
   router.put('/uppdateT' , ()=>{
    
        console.log('add  ')
    })
    
   router.delete('/deleteT' , ()=>{
    
        console.log('add  ')
    })


module.exports= router;