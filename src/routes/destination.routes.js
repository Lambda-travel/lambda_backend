const express= require('express');
const destinationRouter = express.Router();
const destinationController = require('../controller/destination.controller');


//* /destination/id
destinationRouter.get('/:id', destinationController.getDestinationById )

/**************  DESTINATION DETAIL  *********/

destinationRouter.get('/detailsCard/:id', destinationController.destinationDetailsCard )

destinationRouter.get('/details/:id', destinationController.destinationDetails )


/*********** CREATE DESTINATION *************/
// post images
destinationRouter.post("/images",destinationController.createDestinationImages)


/*********** CREATE DESTINATION *************/
destinationRouter.post("/:id",destinationController.createDestination)





module.exports = destinationRouter

