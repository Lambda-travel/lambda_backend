const Trip = require("../models/new-trip.model");
const Users = require("../models/users.model");
const TravelMates = require("../models/travelmate.model");

const createTrip = (req, res) => {

  if(req.body.email) delete req.body.email;

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
                  .json({message:"New trip created! Date range also generated!", tripId: tripId});
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

/**************  EDIT TRIP **************************/

const editTrip =(req,res)=>{
  const trip_id = Number(req.params.id)
  const {body} = req

  Trip.editTrip(body,trip_id)
  .then((result)=> {
    if(result.affectedRows > 0) {
      res.sendStatus(200)
    }else {
      res.sendStatus(404)
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error creating your new trip in the database");
  });

}

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

/*************** GET ALL TRIPS **********************/

const getTrips = (req, res) => {
  //! this ID should come from the TOKEN
// console.log(req.userId);
  Trip.getAllTrips(req.userId)
    .then((result) => {
      if (result !== null && result.length > 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send("Trips not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error creating your new trip in the database");
    });
}


/*************** GET TRIP BY ID **********************/

const getInfoOfTrip =(req,res)=> {
  const id = Number(req.params.id)
  Trip.getInfoOfTrip(id)
  .then((result)=> {
    if(result !== null) {
      res.status(200).send(result)
    } else {
      res.status(404).send("Not Found")
   }
  })
  .catch((err) => {
   console.error(err);
   res.status(500).send("Error creating your new trip in the database");
  });
}


/*************** GET PLACE TO VISIT **********************/

 const getPlaceToVisit =(req,res)=> {
   const id = Number(req.params.id)
   Trip.placeToVisit(id)
   .then((result)=> {
     if(result !== null) {
       res.status(200).send(result)
     } else {
       res.status(404).send("Not Found")
    }
   })
   .catch((err) => {
    console.error(err);
    res.status(500).send("Error creating your new trip in the database");
   });
 }


const getPlaces = (req, res) => {
  //! this ID should come from the TOKEN
  const {id} = req.params
  Trip.getPlacesToVisit(id)
    .then((result) => {
      if (result !== null && result.length > 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send("Cannot find Place");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving places from database");
    });

  };


/******************** CREATE PLACE TO VISIT ************************************/

  function createPlaceToVisit (req,res) {
  const {name,description} = req.body
  const tripID = Number(req.params.id)
  Trip.createPlaceToVisit(name,description,tripID)
  .then((createPlace)=> {
    if(createPlace.affectedRows > 0){
      res.status(201).send("Place to visit Created")
    }else {
      res.status(422).send("Sorry you miss any information");
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error retrieving places from database");
  });
}


const getTravelMates = (req, res) => {
const {id} = req.params
TravelMates.getTravelMatesByTripId(id)
  .then(async(results)=> {
    if (results !== null && results.length > 0) {
      
      const travelMates = results.filter(result => result.user_id !== req.userId)
      
      try {
        const pictures = await Users.getTravelMatesPicture(travelMates);

        if(pictures !== null && pictures.length > 0) {
          res.status(200).send(pictures)
        } else {
          res.status(404).send("Unable to find travel mates pictures")
        }
      } catch (error) {
        res.status(500).json({
          error: "Error generating date range",
          message: error.message,
        });
      }
      
      
      // res.status(200).send(results)
    } else {
      res.status(404).send("Cannot find travel mates.");
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error retrieving places from database");
  });
}



module.exports = {
  createTrip,
  getTrips,
  getPlaces,
  getAllDays,
  getPlaceToVisit,
  getInfoOfTrip,
  createPlaceToVisit,
  editTrip,
  getTravelMates
};
