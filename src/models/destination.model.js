const database = require('../database/database.config')

const getById = (id)=>{

    return database.query('SELECT * FROM destinations WHERE id=? ', id)
        .then(([results])=>results) //*console.log the results first to check

}

/************* DESTINATION DETAILS ***************************/


const destinationDetail = (id)=>{
    return database.query('select * from destinations INNER JOIN destination_images ON destinations.id = destination_images.destination_id where day_id=? ', id)
        .then(([results])=>results) 

}
/************* DESTINATION IMAGES ***************************/


const destinationImages = (id)=>{
    return database.query('SELECT image_url FROM destination_images WHERE destination_id=?', id)
        .then(([results])=>results) 

}

/***************   CREATE DESTINATION  ********************/

const createDestination =( body )=> {
    return database.query("INSERT INTO destination SET ?", body)
    .then(([results])=> results)
}




module.exports = {
    getById,
    createDestination,
    destinationDetail,
    destinationImages
}