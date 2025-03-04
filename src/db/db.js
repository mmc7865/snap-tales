const mongoose = require('mongoose')
 function connect(){
    mongoose.connect('mongodb://localhost:27017/insta')
    .then(()=>{
        console.log('server is connected to db')
    })
    .catch(err => console.log('Error in db connection :=>', err))
 }
 module.exports = connect