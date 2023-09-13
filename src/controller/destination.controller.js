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
            if(results !== null){
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

/*****************  CREATE DESTINATION  *****************/

 const createDestination =(req,res)=> {

    const {place_to_visit,location,description,image} = req.body
    const id = Number(req.params.id)

    Destination.createDestination (place_to_visit,location,description,id)
    .then((result)=>{
        if(result.affectedRows > 0 ) {
            Destination.destinationImages(result.insertId , image)
            .then((imageAdded)=>{
                if(imageAdded.affectedRows > 0) {
                    res.status(201).send("Created destination with image")
                }
            })
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
}



