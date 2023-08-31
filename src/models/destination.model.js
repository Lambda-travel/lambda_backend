const database = require('../database/database.config')

const getById = (id)=>{

    return database.query('SELECT * FROM destinations WHERE id=? ', id)
        .then(([results])=>results) //*console.log the results first to check

}


module.exports = {
    getById,
}