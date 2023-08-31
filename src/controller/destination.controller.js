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


const getListOfDestinations =(req,res)=> {
    Destination.getAllDestinations()
    .then((results)=>{
        if(results !== null && results.length > 0){
            res.status(200).send(results)
        } else {
            res.status(404).send(`Destination not found` )
        }
    })
    .catch((err)=>{
        console.error(err);
        res.status(500).send('Error retrieving user data from database')
    })
}





module.exports= {
    getDestinationById,
    getListOfDestinations
}



