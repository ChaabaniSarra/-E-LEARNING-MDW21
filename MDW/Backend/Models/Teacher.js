const mongoose = require('mongoose');


const Teacher= mongoose.model( 'Teacher' , {

    Firstname: String,
    Lastname: String,
    AssignedSubject: String,
    email: String,
    password: Number,

} );

module.exports = Teacher;