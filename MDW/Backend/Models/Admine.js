const mongoose = require('mongoose');


const Admine = mongoose.model( 'Admine' , {

    email: String,
    password: Number,
   

} );

module.exports = Admine;