const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const postModel = require('../models/post.model')

            /*View Controllers */
module.exports.homeViewController = (req, res)=>{
    res.render('Home')
}

module.exports.registerViewController = (req, res)=>{
    res.render('Register')
}
module.exports.loginViewController = (req, res)=>{
    res.render('Login')
}

module.exports.profileViewController = async (req, res)=>{
    const user = await userModel.findById(req.user.id)
    const posts = await postModel.find({author: req.user.id}).populate('author')
    res.render('Profile', {user, posts})
}
module.exports.feedViewController = async (req, res)=>{
    const user = await userModel.findById(req.user.id)
    const posts = await postModel.find().populate('author')
    res.render('Feed',{user, posts})
}

module.exports.logoutController = (req, res)=>{
    res.clearCookie('token')
    res.redirect('/users/login')
}



            /* CRUD/POST Controllers */


module.exports.registerController = async (req, res)=>{
    const {username, email, password, imageURL} = req.body

    const isUserExist = await userModel.findOne({email})
    if(isUserExist){
        return res.send('Hatt be Dusra email la')
    }

    const hashPassword = await bcrypt.hash(password, 12)

    const user = await userModel.create({
        username,
        email,
        password: hashPassword, 
        imageURL
    })

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, 'insta-secret-key')

    res.cookie('token', token)
    res.redirect('/users/profile')
    // res.send('Registered')
}

module.exports.loginController = async (req, res)=>{
    const {email, password} = req.body

    const isUserExist = await userModel.findOne({email})
    if(!isUserExist){
       return res.send('Unauthorized User')
    }

    const isPasswordMatched = await bcrypt.compare(password, isUserExist.password)
    if(!isPasswordMatched){
       return res.send('Incorrect Password')
    }

    const token = jwt.sign({
        id: isUserExist._id,
        email: isUserExist.email
    },'insta-secret-key')

    res.cookie('token', token)
    res.redirect('/users/profile')
    // res.send('Logged In')
}

