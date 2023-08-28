const express=require('express');
const tripRouter= express.Router()
const NewTripController= require('../controller/new-trip.controller')

//* /trip
tripRouter.post('/', NewTripController.createTrip)


module.exports= tripRouter