const express = require("express");
const tripRouter = express.Router();
const NewTripController = require("../controller/new-trip.controller");
const daysMiddleware = require("../middlewares/editDays.middleware")
const {hashPassword, verifyEmailToRegisterUser, verifyEmail, verifyPassword, verifyToken}= require('../middlewares/users.middlewares')


//* /trip
tripRouter.post("/", verifyToken, NewTripController.createTrip);

// get * /trip
//! missing token verify to get userID
tripRouter.get("/", verifyToken, NewTripController.getTrips);

tripRouter.get("/:id/total-places", NewTripController.getPlaces);

tripRouter.get("/:id/travelMates",verifyToken, NewTripController.getTravelMates);

/*--------- GET ALL DAYS OF TRIP-------------*/

tripRouter.get('/:id',NewTripController.getAllDays)


/*--------- GET TRIP INFO BY ID ------------*/

tripRouter.get('/overview/:id',NewTripController.getInfoOfTrip)


/*--------- GET PLACE INFO BY TRIP_ID ------------*/

tripRouter.get('/place/:id',NewTripController.getPlaceToVisit)

/*--------- CREATE A PLACE TO VISIT ------------*/

tripRouter.post('/place/:id',NewTripController.createPlaceToVisit)

/*---------» EDIT TRIP INFO «------------*/

tripRouter.put('/edit/:id',daysMiddleware,NewTripController.editTrip)



module.exports= tripRouter


