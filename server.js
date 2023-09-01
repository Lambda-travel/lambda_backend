const express = require("express")
const cors= require('cors')
require("dotenv").config();

const port = process.env.SERVER_PORT

const  setupRoutes  = require("./src/routes/index.routes")
const server = express()
server.use(express.json())

server.use(cors({
    'origin':'http://localhost:5173'
}))


setupRoutes(server)


server.listen(port,(error)=>{
    if(error){
        console.log("Server don't Run")
    }else {
        console.log(`Server run in port: ${port}`)
    }
})
