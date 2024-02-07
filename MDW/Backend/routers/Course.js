const express = require('express');
const router = express.Router();

const Course =require('../Models/Course')




router.post('/addCourse' , (req,res)=>{
    data=req.body 
    usr =new Course( data) ;
    usr.save()
    .then((saveCourse)=> {
    res.status(200).send(saveCourse)
        
    })
    .catch ((err)=> res.status(400).send("Err"));
    })
    
    
    
    
  router.get ("/getAllCourses" ,async (req,res)=>{
    try{
        const course=await Course.find()
        // res.json(course)
        res.send(course)
    } catch (err) {
            res.status(400).send("Err");
        }

   })

  
    router.delete( "/deleteCourse/:id", async (req, res) => {
        try {
            let id = req.params.id;
            const deleteCourse = await Course.findByIdAndDelete(id);
    
            if (!deleteCourse)
                return res.status(400).send("The cOURSE with the given ID was not found.");
    
            res.send(deleteCourse);
        } catch (err) {
            res.status(400).send("Err");
        }
    });




   
   router.put('/uppdateCourse' , ()=>{
    
        console.log('add  ')
    })
    
 

module.exports= router;