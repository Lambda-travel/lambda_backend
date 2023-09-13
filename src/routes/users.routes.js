const express=require('express');
const usersRouter= express.Router();
const UsersController= require('../controller/users.controller');
const {hashPassword, verifyEmailToRegisterUser, verifyEmail, verifyPassword, verifyToken}= require('../middlewares/users.middlewares')

//* /users/id
usersRouter.get('/:id', UsersController.getUserById )

//* /users
usersRouter.get('/',verifyToken, UsersController.getUserInfo)

//* /users/register
usersRouter.post('/register',verifyEmailToRegisterUser ,hashPassword ,UsersController.createNewUser)

//* /users/login
usersRouter.post('/login',verifyEmail, verifyPassword, UsersController.login )

//* /users/change-password
usersRouter.post('/change-password',verifyToken, verifyPassword, hashPassword, UsersController.changePassword)




module.exports= usersRouter