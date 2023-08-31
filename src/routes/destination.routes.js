const express= require('express');
const destinationRouter = express.Router();
const destinationController = require('../controller/destination.controller')

//* /destination/id
destinationRouter.get('/:id', destinationController.getDestinationById )


module.exports = destinationRouter

