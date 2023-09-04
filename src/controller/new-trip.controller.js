const Trip = require("../models/new-trip.model");

const createTrip = (req, res) => {
  // console.log(req.body);
  Trip.createNewTrip(req.body)
    .then(async (results) => {
      if (results.affectedRows > 0) {
        const { start_date, end_date } = req.body;
        const tripId = results.insertId;

<<<<<<< HEAD

const createTrip =(req, res)=>{
    Trip.createNewTrip(req.body)
    .then((results)=>{
        if(results.affectedRows > 0){
            res.status(201).send('New trip created!')
        } else{
            res.status(422).send('Sorry we were not able to process the creation of your trip')
=======
        try {
          await Trip.generateDateRange(
            start_date,
            end_date,
            tripId
          );
          res.status(201).send("New trip created! Date range also generated!");
        } catch (error) {
          res
            .status(500)
            .json({
              error: "Error generating date range",
              message: error.message,
            });
>>>>>>> d49d2fbb0a0a423afc46c2e7b732120669835b54
        }

        // res.status(201).send("New trip created!");
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

module.exports = {
  createTrip,
};
