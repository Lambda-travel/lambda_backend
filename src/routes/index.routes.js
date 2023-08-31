// import routes here
const tripRouter= require('./plan-new-trip.routes')
const usersRouter= require('./users.routes')
const articlesRouter= require('./articles.routes')
const destinationRouter= require('./destination.routes')

const setupRoutes = (server) => {
    // server.use("<endpoint>",<routes>)
    server.use('/trip', tripRouter)
    server.use('/users', usersRouter)
    server.use('/articles', articlesRouter)
    server.use('/destination', destinationRouter)
}


module.exports = setupRoutes