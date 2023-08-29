const database = require('../database/database.config')



const createNewTrip =(trip)=>{
    return database.query('INSERT INTO trips SET ?', [trip])
        .then(([results])=> results);
}

module.exports={
    createNewTrip
}