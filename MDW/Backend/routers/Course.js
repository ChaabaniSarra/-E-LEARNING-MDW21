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
    




   
   router.put('/uppdateCourse' , ()=>{
    
        console.log('add  ')
    })
    
   router.delete('/deleteT' , ()=>{
    
        console.log('add  ')
    })


module.exports= router;