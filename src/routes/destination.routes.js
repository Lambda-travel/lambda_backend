const express= require('express');
const destinationRouter = express.Router();
const destinationController = require('../controller/destination.controller')

//* /destination/id
destinationRouter.get('/:id', destinationController.getDestinationById )

/**************  DESTINATION DETAIL  *********/

destinationRouter.get('/detail/:id', destinationController.destinationDetails )
/**************  DESTINATION DETAIL  *********/

destinationRouter.get('/image/:id', destinationController.destinationImages )

/************ CREATE DESTINATION *************/

destinationRouter.post("/",destinationController.createDestination)





module.exports = destinationRouter

