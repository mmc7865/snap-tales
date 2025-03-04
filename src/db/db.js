const mongoose = require('mongoose')
 function connect(){
    mongoose.connect('mongodb+srv://ak0163797:o67Uenf7QiefRMc0@cluster0.oabm5.mongodb.net/insta')
    .then(()=>{
        console.log('server is connected to db')
    })
    .catch(err => console.log('Error in db connection :=>', err))
 }
 module.exports = connect