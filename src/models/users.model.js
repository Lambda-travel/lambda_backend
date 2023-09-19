const database = require('../database/database.config')



const getById = (id)=>{
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

const findUserToLogin=(email)=>{
    return database.query('SELECT * FROM users WHERE email=?', email)
        .then(([results])=> results)
}

const newPasswordChange = (hashedPassword, email)=>{
    return database.query('UPDATE users SET hashed_password=? WHERE email =?', [hashedPassword, email])
        .then(([results])=> results);
}

const getTravelMatesPicture = async(users) => {
    try {
        const promises = users.map(async (user) => {
            const queryResult = await database.execute('SELECT user_name, profile_image_url FROM users WHERE id = ?', [user.user_id]);
            return queryResult[0][0]
          });
      
          const profilePictures = await Promise.all(promises);

        return profilePictures
      
      } catch (error) {
        throw error;
        
      }

}



module.exports = {
    getById,
    verifyByEmail,
    createUser,
    verifyRegisterEmail,
    findUserToLogin,
    newPasswordChange,
    getTravelMatesPicture
}