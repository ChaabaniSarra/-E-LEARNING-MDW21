const mongoose = require('mongoose');


const Student= mongoose.model( ' STudent' , {
    profilePicture:String,
    firstName: String,
    lastName: String,
    email: String,
    password: Number,

} );

module.exports =  Student;