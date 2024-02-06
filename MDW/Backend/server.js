//  this is the main file for runnig the programme  it will call all other necessary files and functions to execute the code

const express = require('express');  //import express  library
const cors = require('cors');
const app = express();   //create an instance of the express server

app.use(express.json()) //this app can read any json file  sent to it from a client  side application 
app.use(cors());
 const mongoose = require('./config/connect');

const AdmineRoute = require('./routers/Admine');
const TeacherRoutes=require("./routers/Teacher");
const CourseRoutes= require("./routers/Course")


app.use( "/Teacher" , TeacherRoutes);//the above line is used for routing in our application . we are saying that if anyone wants to access anything related to teacher they should go through this route//map url /Teacher to our teacher router 
app.use('/Admine', AdmineRoute);//telling our app that we will be using the routes defined in the Admin route  file 
app.use('/Course', CourseRoutes)




app.listen(3000 , ()=>{
    console.log('server work')
}); 
