const database = require('../database/database.config')

const getById = (id)=>{

    return database.query('SELECT * FROM destinations WHERE id=? ', id)
        .then(([results])=>results) //*console.log the results first to check

}

/***************   CREATE DESTINATION  ********************/

const createDestination =( body )=> {
    return database.query("INSERT INTO destinations SET ?", body)
    .then(([results])=> results)
}



module.exports = {
    getById,
    createDestination
}