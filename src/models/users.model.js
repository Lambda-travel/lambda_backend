const database = require('../database/database.config')



const getById = (id)=>{
    // console.log(id)
    return database.query('SELECT * FROM users WHERE id=? ', id)
        .then(([results])=> results)
}

module.exports = {
    getById,
}