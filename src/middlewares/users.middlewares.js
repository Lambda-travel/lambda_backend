const argon2= require('argon2')
const Users = require("../models/users.model");

const verifyEmailOrUser = (req, res, next) => {
  const { value } = req.body;
  Users.verifyByEmail(value).then((results) => {
    if (results[0] !== undefined) {
      delete results[0].hashed_password;
      req.travelMate = results[0];
      next();
    } else {
      res.status(401).send("This Email or Username does not exist");
    }
  });
};

const verifyUser = (req, res, next) => {};

const hashingOptions={
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
}

const hashPassword=(req, res, next)=>{
  argon2.hash(req.body.password,hashingOptions)
    .then(hashedPassword=>{
      delete req.body.password
      req.body.hashed_password = hashedPassword
      next()  
    })
    .catch((error)=>{
      console.error(error)
      res.status(500).send('Error hashing the password')
    })
}

const verifyEmailExists=(req, res, next)=>{
  Users.verifyRegisterEmail(req.body.email)
  .then(results =>{
    if(results!== null && results.length>0){
      res.status(401).send('This email is already in use')
    }else {
      next()
    }
  })
}


module.exports = {
  verifyEmailOrUser,
  verifyUser,
  hashPassword,
  verifyEmailExists,
};
