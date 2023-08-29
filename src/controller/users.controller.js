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

module.exports = { 
    getUserById,
}