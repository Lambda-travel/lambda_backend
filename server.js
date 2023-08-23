require("dotenv").config();
const express = require("express")
const server = express()
const port = process.env.SERVER_PORT

server.use(express.json())






server.listen(port,(error)=>{
    if(error){
        console.log("Server don't Run")
    }else {
        console.log(`Server run in port: ${port}`)
    }
})
