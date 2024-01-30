// this file is to make the connection with the data base 
const mongoose = require('mongoose'); //import mongose  library for working with MongoDB 
mongoose.connect( 'mongodb://127.0.0.1:27017/MDW21' ) //connection with the data base
    .then(
        ()=>{
            console.log('connected to db !');
        }
    )
    .catch(
        ()=>{
            console.log('error in connection');
        }
    )

// 3
module.exports = mongoose;