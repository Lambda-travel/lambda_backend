const database = require('../database/database.config')


const getAll= ()=>{
    return database.query('SELECT * FROM articles ')
        .then(([results])=> results)
}

const getById=(id)=>{
    return database.query('SELECT * FROM articles WHERE id=?', id)
        .then (([results])=> results)
}

module.exports={
    getAll,
    getById,
}