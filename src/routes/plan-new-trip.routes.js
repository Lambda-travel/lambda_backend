const express = require("express");
const tripRouter = express.Router();
const NewTripController = require("../controller/new-trip.controller");

//* /trip
tripRouter.post("/", NewTripController.createTrip);

// get * /trip
//! missing token verify to get userID
tripRouter.get("/", NewTripController.getTrips);
tripRouter.get("/place", NewTripController.getPlaces);

module.exports = tripRouter;
