
const Trip = require('../models/new-trip.model')


const createTrip =(req, res)=>{
    Trip.createNewTrip(req.body)
    .then((results)=>{
        if(results.affectedRows > 0){
            res.status(201).send('New trip created!')
        } else{
            res.status(422).send('Sorry we were not able to process the creation of your trip')
        }
    })
.catch((err)=>{
    console.error(err);
    res.status(500).send('Error creating your new trip in the database')
})
}

module.exports={
    createTrip
}