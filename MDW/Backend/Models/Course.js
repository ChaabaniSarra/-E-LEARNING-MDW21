const mongoose = require('mongoose');


const Course = mongoose.model( 'Course' , {

    courseTitle: String,
    description: String,
    img:String,
   

} );

module.exports = Course;