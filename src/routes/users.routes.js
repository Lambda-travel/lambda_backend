const express=require('express');
const usersRouter= express.Router();
const UsersController= require('../controller/users.controller');
const {hashPassword, verifyEmailToRegisterUser, verifyEmail, verifyPassword}= require('../middlewares/users.middlewares')

//* /users/id
usersRouter.get('/:id', UsersController.getUserById )

//* /users/register
usersRouter.post('/register',verifyEmailToRegisterUser ,hashPassword ,UsersController.createNewUser)


//* /users/login
usersRouter.post('/login',verifyEmail, verifyPassword, UsersController.login )



module.exports= usersRouter