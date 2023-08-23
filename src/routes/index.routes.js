

const setupRoutes = (server) => {
    server.use("/",()=>{
        console.log("hello")
    })
}


module.exports = setupRoutes