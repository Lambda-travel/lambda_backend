const express=require('express');
const tripRouter= express.Router()
const NewTripController= require('../controller/new-trip.controller')

//* /trip
tripRouter.post('/', NewTripController.createTrip)


/*--------- GET ALL DAYS OF TRIP-------------*/

tripRouter.get('/:id',NewTripController.getAllDays)


/*--------- GET ALL  TRIP-------------*/

tripRouter.get('/',NewTripController.getAllTrips)

/*--------- GET TRIP BY ID-------------*/

tripRouter.get('/overview/:id',NewTripController.getTripById)



tripRouter.get('/overview/:id',NewTripController.getPlaceToVisit)



module.exports= tripRouter