const Destination = require('../models/destination.model')



const getDestinationById = (req, res)=>{
const id = Number(req.params.id)

Destination.getById(id)
        .then((results)=>{
            if(results !== null && results.length>0){
                res.status(200).send(results);
            }else{
                res.status(404).send(`Destination with the id: ${id} not found` )
            }
        })
        .catch((err)=>{
            console.error(err);
            res.status(500).send('Error retrieving user data from database')
        })
}
/************ DESTINATION DETAILS  ******************/

const destinationDetails = (req, res)=>{
const id = Number(req.params.id)
Destination.destinationDetail(id)

        .then((results)=>{
            if(results !== null && results.length>0){
                res.status(200).send(results);
            }else{
                res.status(404).send(`Destination with the id: ${id} not found` )
            }
        })
        .catch((err)=>{
            console.error(err);
            res.status(500).send('Error retrieving user data from database')
        })
}
/************ DESTINATION IMAGES  ******************/

const destinationImages = (req, res)=>{


const id = Number(req.params.id)
Destination.destinationImages(id)

        .then((results)=>{
            if(results !== null){
                res.status(200).send(results);
            }else{
                res.status(200).send("hello")
            }
        })
        .catch((err)=>{
            console.error(err);
            res.status(500).send('Error retrieving user data from database')
        })
}



/*****************  CREATE DESTINATION  *****************/

 const createDestination =(req,res)=> {
    const body = req.body 

    Destination.createDestination (body)
    .then((result)=>{
        if(result.affectedRows > 0 ) {
            res.status(201).send(`Your destination has been created`)
        } else {
            res.status(403).send("Forbidden")
        }
    })
    .catch((err)=>{
        console.error(err);
        res.status(500).send('Error retrieving user data from database')
    })
 }

module.exports= {
    getDestinationById,
    createDestination,
    destinationDetails,
    destinationImages
}



