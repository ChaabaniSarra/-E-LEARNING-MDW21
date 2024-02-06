const express = require('express');
const router = express.Router();

const Teacher=require ("../Models/Teacher")




// router.post('/addTeacher' , (req,res)=>{
//     data=req.body 
//     usr =new Teacher( data) ;
//     usr.save()
//     .then((saveTeacher)=> {
//     res.status(200).send(saveTeacher)
        
//     })
//     .catch ((err)=> res.status(400).send("Err"));
//     })

    router.post('/addTeacher', async (req, res) => {
        try {
            const data = req.body;
            const usr = new Teacher(data);
            const saveTeacher = await usr.save();
            res.send(saveTeacher);
        } catch (err) {
            res.status(400).send("Err");
        }
    });
    

router.get ("/getAllT" ,async (req,res)=>{
    try{
        const teachers=await Teacher.find()
        // res.json(teachers)
        res.send(teachers)
    } catch (err) {
            res.status(400).send("Err");
        }




   })

   router.delete("/delT/:id", async (req, res) => {
    try {
        let id = req.params.id;
        const deleteTeacher = await Teacher.findByIdAndDelete(id);

        if (!deleteTeacher)
            return res.status(400).send("The teacher with the given ID was not found.");

        res.send(deleteTeacher);
    } catch (err) {
        res.status(400).send("Err");
    }
});

router.put(  "/updateT/:id", async (req, res) => {
  
      try{
        let teachId = req.params.id;
        console.log('this is update',req.body)
          const updatedTeacher = await Teacher.findByIdAndUpdate(teachId);
          if(!updatedTeacher){
            return res.status(400).send("The teacher with the given ID was not found.");
            }else{
                updatedTeacher.profilePicture = req.body.profilePicture|| updatedTeacher.profilePicture;
                updatedTeacher.firstName = req.body.firstName|| updatedTeacher.firstName;
                updatedTeacher.lastName = req.body.lastName|| updatedTeacher.lastName;
                updatedTeacher.assignedSub = req.body.assignedSub|| updatedTeacher.assignedSub;
                updatedTeacher.email = req.body.email|| updatedTeacher.email;

                const teacher = await updatedTeacher.save();
                res.send(teacher);
                }

      }  catch (err) {
        res.status(400).send("Err");
    }})




module.exports= router;