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

module.exports = {
  verifyEmailOrUser,
  verifyUser,
};
