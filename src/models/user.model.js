const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    imageURL:{
        type: String
    },
    password:{
        type: String
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
})
const userModel = mongoose.model('user', userSchema)
module.exports = userModel