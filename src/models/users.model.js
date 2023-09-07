const database = require('../database/database.config')



const getById = (id)=>{
    // console.log(id)
    return database.query('SELECT * FROM users WHERE id=? ', id)
        .then(([results])=> results)
}

const verifyByEmail=(value)=>{
    return database.query('SELECT * FROM users WHERE email=? OR user_name=?', [value, value])
        .then(([results])=> results)

}

const createUser=(user)=>{
    return database.query('INSERT INTO users SET ?', user )
    .then(([results])=>results)
}

const verifyRegisterEmail=(email)=>{
    return database.query('SELECT email FROM users WHERE email=?', email)
        .then(([results])=> results)
}
module.exports = {
    getById,
    verifyByEmail,
    createUser,
    verifyRegisterEmail,
}