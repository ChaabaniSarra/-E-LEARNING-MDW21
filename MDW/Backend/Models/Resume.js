const mongoose = require('mongoose');


const Resume= mongoose.model( 'Resume' , {

    img: String,
    resumeTitle: String,
    description :String,
   

} );

module.exports = Resume;