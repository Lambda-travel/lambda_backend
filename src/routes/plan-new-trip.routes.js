const express=require('express');
const tripRouter= express.Router()
const NewTripController= require('../controller/new-trip.controller')

//* /trip
tripRouter.post('/', NewTripController.createTrip)


/*--------- GET ALL DAYS OF TRIP-------------*/

tripRouter.get('/:id',NewTripController.getAllDays)

module.exports= tripRouter