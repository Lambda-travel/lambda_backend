const Trip = require("../models/new-trip.model");

const inviteTravelmate = (req, res) => {
  const { id } = req.travelMate;
  const { trip_id } = req.body;
  const data = {
    trip_id: trip_id,
    user_id: id,
  };

  //! send EMAIL message

  Trip.createNewTravelMateTrip(data)
    .then((results) => {
      if (results.affectedRows > 0) {
        res.status(201).send("Your Travelmate has been invited");
      } else {
        res
          .status(422)
          .send("Sorry we could not process the invitation of your Travelmate");
      }
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send(
          "Error creating the invitation of the travelmate in the database"
        );
    });
};

module.exports = {
  inviteTravelmate,
};
