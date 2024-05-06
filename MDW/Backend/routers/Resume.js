const express = require('express');
const router = express.Router();

const Resume =require('../Models/Resume')




router.post('/addResume' , (req,res)=>{
    data=req.body 
    usr =new Resume( data) ;
    usr.save()
    .then((saveResume)=> {
    res.status(200).send(saveResume)
        
    })
    .catch ((err)=> res.status(400).send("Err"));
    })
    
    
    
    
  router.get ("/getAllResumes" ,async (req,res)=>{
    try{
        const resume=await Resume.find()
        res.send(resume)
    } catch (err) {
            res.status(400).send("Err");
        }

   })

  
    router.delete( "/deleteResume/:id", async (req, res) => {
        try {
            let id = req.params.id;
            const deleteResume = await Resume.findByIdAndDelete(id);
    
            if (!deleteResume)
                return res.status(400).send("The Resume with the given ID was not found.");
    
            res.send(deleteResume);
        } catch (err) {
            res.status(400).send("Err");
        }
    });




   
   router.put('/uppdateResume' , ()=>{
    
        console.log('add  ')
    })
    
 

module.exports= router;