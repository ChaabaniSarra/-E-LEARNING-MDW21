const mongoose = require('mongoose');


const Teacher= mongoose.model( 'Teacher' , {
    profilePicture:String,
    firstName: String,
    lastName: String,
    assignedSub: String,
    email: String,
    password: Number,

} );

module.exports = Teacher;