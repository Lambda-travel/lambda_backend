const database = require("../database/database.config");

const getTravelMateUserById = (userId, trip_id) => {
  return database
    .query("SELECT * FROM travel_mates WHERE user_id=? AND trip_id=?", [
      userId,
      trip_id,
    ])
    .then(([results]) => results);
};

module.exports = {
  getTravelMateUserById,
};
