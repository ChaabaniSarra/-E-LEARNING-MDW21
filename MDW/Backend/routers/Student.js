const express = require('express');
const router = express.Router();

const Student =require('../Models/Student');


    router.post('/addStudent', async (req, res) => {
        try {
            const data = req.body;
            const usr = new Student(data);
            const saveStudent = await usr.save();
            res.send(saveStudent);
        } catch (err) {
            res.status(400).send("Err");
        }
    });
    
    
    
  router.get ("/getAllStudents" ,async (req,res)=>{
    try{
        const student=await Student.find()
        res.send(student)
    } catch (err) {
            res.status(400).send("Err");
        }

   })

  
    router.delete( "/deleteStudent/:id", async (req, res) => {
        try {
            let id = req.params.id;
            const deleteStudent = await Student.findByIdAndDelete(id);
    
            if (!deleteStudent)
                return res.status(400).send("The Student with the given ID was not found.");
    
            res.send(deleteStudent);
        } catch (err) {
            res.status(400).send("Err");
        }
    });




   
   router.put('/uppdateStudent' , ()=>{
    
        console.log('add  ')
    })
    