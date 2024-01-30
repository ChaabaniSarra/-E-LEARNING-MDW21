const express = require('express');
const router = express.Router();

const Teacher=require ("../Models/Teacher")


// teacher

router.post('/addT' , (req,res)=>{
    data=req.body 
    usr =new Teacher( data) ;
    usr.save()
    .then((saveTeacher)=> {
    res.status(200).send(saveTeacher)
        
    })
    .catch ((err)=> res.status(400).send("Err"));
    })


module.exports= router;