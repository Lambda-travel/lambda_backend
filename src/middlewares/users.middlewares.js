const argon2= require('argon2')
const Users = require("../models/users.model");
const jwt = require('jsonwebtoken')

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

// const hashPassword=(req, res, next)=>{
//   console.log(error);
//   if(req.body.newPassword !== null && req.body.newPassword !== undefined){
//     req.body.password = req.body.newPassword
//   }
//   argon2
//     .hash(req.body.password, hashingOptions)
//     .then((hashedPassword) => {
//       delete req.body.password;

//       if(req.body.newPassword !== null && eq.body.newPassword !== undefined){
//         delete req.body.newPassword
//       }
//       req.body.hashedPassword = hashedPassword;

//       next();
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send("Error hashing the password");
//     });
// }
const hashPassword = (req, res, next) => {
  if(req.body.newPassword !== null && req.body.newPassword !== undefined){
    req.body.password = req.body.newPassword
 }
argon2
 .hash(req.body.password, hashingOptions)
 .then((hash_password) => {
   delete req.body.password;

     if(req.body.newPassword !== null && req.body.newPassword !== undefined){
        delete req.body.newPassword
     }
   req.body.hashed_password = hash_password;

   next();
 })
 .catch((error) => {
   console.error(error);
   res.status(500).send("Error hashing the password");
 });
};

const verifyEmailToRegisterUser=(req, res, next)=>{
  Users.verifyRegisterEmail(req.body.email)
  .then(results =>{
    if(results!== null && results.length>0){
      res.status(401).send('This email is already in use')
    }else {
      next()
    }
  })
  .catch((error)=>{
    console.error(error)
    res.status(500).send('Error retrieving data from the database')
  });
};

const verifyEmail=(req, res, next)=>{
  Users.verifyRegisterEmail(req.body.email)
  .then(results =>{
    if(results!== null && results.length>0){
      next()
    }else {
      res.status(401).send('This email is not registered, please create an account first')
    }
  })
  .catch((error)=>{
    console.error(error)
    res.status(500).send('Error retrieving data from the database')
  });
};

const verifyPassword=(req, res, next)=>{
  //*get the user hashed password
  Users.findUserToLogin(req.body.email)
      .then((user)=>{
        if(user !== null && user.length>0){
          argon2.verify(user[0].hashed_password, req.body.password )
              .then((isVerified)=>{
                if(isVerified){
                  delete user[0].hashed_password
                  req.user = user[0]
                  next()
                }else{
                  res.status(401).send('Invalid password')
                }
              })
              .catch((error)=>{
                console.error(error)
                res.status(500).send('Error verifying the password')
              });

        }else{
          res.status(404).send('User not found')
        }
      })
      .catch((error)=>{
        console.error(error)
        res.status(500).send('Error retrieving user from database')
      });

}
const verifyToken=(req, res, next)=>{

  const authorizationHeader= req.get("Authorization");

  if(authorizationHeader === null){
    res.status(403).send('Authorization header is missing')
  }

  const [type, token] = authorizationHeader.split(" ");

  
  if(type !== "Bearer"){
    res.status(403).send('Authorization header has not the "Bearer" type')
  }

  jwt.verify(token, process.env.PRIVATE_KEY, (error, decoded)=>{
    if(error){
      console.error(error);
      res.status(403).send('Error decoding authorization header')
    }else{
      // console.log(req.body);
      req.body.email = decoded.sub
      next()
    }
  })


}


module.exports = {
  verifyEmailOrUser,
  verifyUser,
  hashPassword,
  verifyEmailToRegisterUser,
  verifyEmail,
  verifyPassword,
  verifyToken
};
