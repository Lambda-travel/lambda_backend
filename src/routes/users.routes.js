const express=require('express');
const usersRouter= express.Router();
const UsersController= require('../controller/users.controller');


//* /users/id
usersRouter.get('/:id', UsersController.getUserById )



module.exports= usersRouter