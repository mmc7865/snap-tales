const express = require('express')
const postRouter = express.Router()
const {postViewController, postCreateController} = require('../controllers/post.controller')
const { userAuth } = require('../middlewares/user.auth')


postRouter.get('/createPost', userAuth, postViewController)
postRouter.post('/createPost', userAuth, postCreateController)


module.exports = postRouter