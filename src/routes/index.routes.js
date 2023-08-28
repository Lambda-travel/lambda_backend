// import routes here
const tripRouter= require('./plan-new-trip.routes')

const setupRoutes = (server) => {
    // server.use("<endpoint>",<routes>)
    server.use('/trip', tripRouter)
}


module.exports = setupRoutes