const Users = require('../models/users.model')


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
    if(req.user !== null && Object.keys(req.user).length>0){
    res.status(200).send(req.user)
    }else {
        res.status(404).send('Invalid credentials')
    }

}



module.exports = { 
    getUserById,
    createNewUser,
    login
}