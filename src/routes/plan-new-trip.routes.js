const express = require("express");
const tripRouter = express.Router();
const NewTripController = require("../controller/new-trip.controller");

//* /trip
tripRouter.post("/", NewTripController.createTrip);

// get * /trip
//! missing token verify to get userID
tripRouter.get("/", NewTripController.getTrips);
tripRouter.get("/place", NewTripController.getPlaces);

<<<<<<< HEAD
/*--------- GET ALL DAYS OF TRIP-------------*/

tripRouter.get('/:id',NewTripController.getAllDays)


/*--------- GET ALL  TRIP-------------*/

tripRouter.get('/',NewTripController.getAllTrips)

/*--------- GET TRIP BY ID-------------*/

tripRouter.get('/overview/:id',NewTripController.getTripById)



tripRouter.get('/overview/:id',NewTripController.getPlaceToVisit)



module.exports= tripRouter
=======
module.exports = tripRouter;
>>>>>>> c4bad10aec48745e68374745e19800f22acf8b4a
