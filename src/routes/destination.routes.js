const express= require('express');
const destinationRouter = express.Router();
const destinationController = require('../controller/destination.controller')

//* /destination/id
destinationRouter.get('/:id', destinationController.getDestinationById )



/************ CREATE DESTINATION *************/

destinationRouter.post("/",destinationController.createDestination)





module.exports = destinationRouter

