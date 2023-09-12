const Users = require('../models/users.model')
const jwt = require('jsonwebtoken');
require('dotenv').config()


const getUserById=(req, res)=>{
    const id = Number(req.params.id);

    Users.getById(id)
    .then((results)=>{
        if(results !== null && results.length>0){
            res.status(200).send(results);
        }else{
            res.status(404).send(`User with the id: ${id} not found` )
        }
    })
    .catch((err)=>{
        console.error(err);
        res.status(500).send('Error retrieving user data from database')
    })
}

const createNewUser=(req, res)=>{
        
        Users.createUser(req.body)
        .then(results => {
            if(results.affectedRows>0){
                res.status(201).send('The user has been created successfully')
            }else {
               res.status(422).send('The server was unable to process the creation of the new user') 
            }
        })
        .catch((error)=>{
            console.error(error)
            res.status(500).send('Error creating the new user')
        })
}

const login=(req, res)=>{
    const{id, email }= req.user;

    if(req.user !== null && Object.keys(req.user).length>0){
        const token = jwt.sign({userId:id, sub:email, exp: Math.floor((Date.now() + 1000 * 60 * 60 * 24 * 90) / 1000) },process.env.PRIVATE_KEY)
        res.status(200).send({message: 'Success', token: token})
        // res.status(200).send(req.user)
    }else {
        res.status(404).send('Invalid credentials')
    }
}

const changePassword=(req, res)=>{
    
    Users.newPasswordChange(req.body.hashed_password, req.body.email)
        .then((results)=>{
            if(results.affectedRows>0){
                res.status(200).send('Your password has been changed')
            }else{
                res.status(404).send('Please enter your new password')
            }  
        })
        .catch((error)=>{
            console.error(error);
            res.status(500).send('Cannot change your password')
        })

}

const getUserInfo=(req, res)=>{
    const {email}= req.body
    Users.findUserToLogin(email)
        .then(user =>{
            if(user[0] !== null && user[0].email === email){
                delete user[0].hashed_password
                res.status(200).send(user[0])

            }else{
                res.status(404).send('User not found with the email' + email)
            }

        })
        .catch((error)=>{
            console.error(error);
            res.status(500).send('Error retrieving user info from database')
        })


}



module.exports = { 
    getUserById,
    createNewUser,
    login,
    getUserInfo,
    changePassword
}