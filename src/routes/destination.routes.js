const express= require('express');
const destinationRouter = express.Router();
const destinationController = require('../controller/destination.controller');


//* /destination/id
destinationRouter.get('/:id', destinationController.getDestinationById )

/**************  DESTINATION DETAIL  *********/

destinationRouter.get('/detail/:id', destinationController.destinationDetails )


/*********** CREATE DESTINATION *************/

destinationRouter.post("/:id",destinationController.createDestination)




module.exports = destinationRouter

