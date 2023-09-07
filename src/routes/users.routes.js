const express=require('express');
const usersRouter= express.Router();
const UsersController= require('../controller/users.controller');
const {hashPassword, verifyEmailExists}= require('../middlewares/users.middlewares')

//* /users/id
usersRouter.get('/:id', UsersController.getUserById )

//* /users/register
usersRouter.post('/register',verifyEmailExists ,hashPassword ,UsersController.createNewUser)


//* /users/login



module.exports= usersRouter