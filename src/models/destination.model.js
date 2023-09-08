const database = require('../database/database.config')

const getById = (id)=> {

    return database.query('SELECT * FROM destinations WHERE day_id=? ', id)
        .then(([results])=>results) //*console.log the results first to check

}

/************* DESTINATION DETAILS ***************************/


const destinationDetail = (id)=> {
    return database.query('select * from destinations INNER JOIN destination_images ON destinations.id = destination_images.destination_id where destination_id=? ', id)
        .then(([results])=>results) 

}


/***************   CREATE DESTINATION  ********************/

const createDestination =( place_to_visit,location,description,id )=> {
    return database.query(`INSERT INTO destinations (place_to_visit,location,description,day_id) VALUES ('${place_to_visit}','${location}','${description}',${id})`)
    .then(([results])=> results)
}
/************* DESTINATION IMAGES ***************************/


const destinationImages = (image,id)=>{
    return database.query(`INSERT INTO destination_images (destination_id,image_url) VALUES ('${image}','${id}')`)
        .then(([results])=>results) 

}



module.exports = {
    getById,
    createDestination,
    destinationDetail,
    destinationImages
}