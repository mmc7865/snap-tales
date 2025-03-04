const express = require('express');
const { homeViewController, registerViewController, loginViewController, profileViewController, registerController, loginController, feedViewController, logoutController } = require('../controllers/user.controller');
const userRouter = express.Router();
const {userAuth} =require('../middlewares/user.auth')


userRouter.get('/', homeViewController )
userRouter.get('/register', registerViewController)
userRouter.get('/login', loginViewController)
userRouter.get('/profile',userAuth, profileViewController)
userRouter.get('/exploreFeed',userAuth, feedViewController)
userRouter.get('/logOut', logoutController)


userRouter.post('/register',registerController)
userRouter.post('/login',loginController)


module.exports = userRouter