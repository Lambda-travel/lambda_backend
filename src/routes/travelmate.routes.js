const travelmateRouter = require('express').Router();
const TravelmateController= require('../controller/travelmate.controller')
const {verifyEmailOrUser, verifyTheInvitedUser}= require('../middlewares/travelmate.middlewares')


//* /travelmate
travelmateRouter.post('/',verifyEmailOrUser, verifyTheInvitedUser, TravelmateController.inviteTravelmate)


module.exports = travelmateRouter