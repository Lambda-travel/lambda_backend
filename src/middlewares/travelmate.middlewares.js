const Users = require("../models/users.model");
const TravelMate = require("../models/travelmate.model");

const verifyEmailOrUser = (req, res, next) => {
  const { value } = req.body;
  console.log(req.body);
  Users.verifyByEmail(value)
    .then((results) => {
      if (results[0] !== undefined) {
        delete results[0].hashed_password;
        req.travelMate = results[0];
        next();
      } else {
        res.status(401).send("This Email or Username does not exist");
      }
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send("Error verifying email or username for travel mate.");
    });
};

const verifyTheInvitedUser = (req, res, next) => {
  const { id } = req.travelMate;
  const { trip_id } = req.body;

  TravelMate.getTravelMateUserById(id, trip_id)
    .then((results) => {
      if (results !== undefined && results.length > 0) {
        res
          .status(403)
          .send(
            ` ${req.travelMate.email} was already been invited to this trip.`
          );
      } else {
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error verifying travel mate in DB");
    });
};

//!falta o user name para colocar no email
// const getUserName =(req, res, next)=>{
//   const { value } = req.body;
//   Users.verifyByEmail(value)
// }

module.exports = {
  verifyEmailOrUser,
  verifyTheInvitedUser,
};
