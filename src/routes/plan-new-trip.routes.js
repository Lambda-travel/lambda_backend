const express = require("express");
const tripRouter = express.Router();
const NewTripController = require("../controller/new-trip.controller");

//* /trip
tripRouter.post("/", NewTripController.createTrip);

// get * /trip
//! missing token verify to get userID
tripRouter.get("/", NewTripController.getTrips);

tripRouter.get("/place", NewTripController.getPlaces);


/*--------- GET ALL DAYS OF TRIP-------------*/

tripRouter.get('/:id',NewTripController.getAllDays)


/*--------- GET TRIP INFO BY ID ------------*/

tripRouter.get('/overview/:id',NewTripController.getInfoOfTrip)

/*--------- GET PLACE INFO BY TRIP_ID ------------*/

tripRouter.get('/place/:id',NewTripController.getPlaceToVisit)



module.exports= tripRouter


