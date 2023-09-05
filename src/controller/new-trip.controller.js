const Trip = require("../models/new-trip.model");

const createTrip = (req, res) => {
  Trip.createNewTrip(req.body)
    .then(async (results) => {
      if (results.affectedRows > 0) {
        const { start_date, end_date, user_id } = req.body;
        const tripId = results.insertId;

        try {
          await Trip.generateDateRange(start_date, end_date, tripId);
          let data = {
            user_id: user_id,
            trip_id: tripId,
          };
          Trip.createNewTravelMateTrip(data)
            .then((results) => {
              if (results.affectedRows > 0) {
                res
                  .status(201)
                  .send("New trip created! Date range also generated!");
              } else {
                res
                  .status(422)
                  .send(
                    "Sorry we were not able to process the creation of your travel mate trip. Please try again."
                  );
              }
            })
            .catch((err) => {
              res.status(500).json({
                error: "Error generating date range",
                message: err.message,
              });
            });
        } catch (error) {
          res.status(500).json({
            error: "Error generating date range",
            message: error.message,
          });
        }
      } else {
        res
          .status(422)
          .send("Sorry we were not able to process the creation of your trip");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error creating your new trip in the database");
    });
};


/***************** GET LIST OF DAYS FROM TRIP *********************/

const getAllDays =(req,res)=> {
  const id = Number(req.params.id)
  Trip.getAllDays(id)
  .then((result)=>{
    if(result !== null && result.length > 0){
      res.status(200).send(result)
    } else {
      res.status(404).send("Not Found!")
    }
    
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error creating your new trip in the database");
  });
}

module.exports = {
  createTrip,
  getAllDays
};
