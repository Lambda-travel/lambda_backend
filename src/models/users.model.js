const database = require("../database/database.config");

const createUser = (user) => {
  return database
    .query("INSERT INTO users SET ?", user)
    .then(([results]) => results);
};

const verifyByEmail = (value) => {
  return database
    .query("SELECT * FROM users WHERE email=? OR user_name=?", [value, value])
    .then(([results]) => results);
};

const getById = (id) => {
  return database
    .query("SELECT * FROM users WHERE id=? ", id)
    .then(([results]) => results);
};

const verifyRegisterEmail = (email) => {
  return database
    .query("SELECT email FROM users WHERE email=?", email)
    .then(([results]) => results);
};

const findUserToLogin = (email) => {
  return database
    .query("SELECT * FROM users WHERE email=?", email)
    .then(([results]) => results);
};

const getTravelMatesPicture = async (users) => {
  try {
    const promises = users.map(async (user) => {
      const queryResult = await database.execute(
        "SELECT user_name, profile_image_url FROM users WHERE id = ?",
        [user.user_id]
      );
      return queryResult[0][0];
    });

    // Wait for all promises to resolve
    const profilePictures = await Promise.all(promises);

    return profilePictures;
    // while (currentDate <= endDateObj) {
    //   const formattedDate = currentDate.toISOString().split('T')[0];

    //   await database.execute('INSERT INTO number_days (day, trip_id) VALUES (?, ?)', [
    //     formattedDate,
    //     tripId,
    //   ]);

    //   currentDate.setDate(currentDate.getDate() + 1);
    // }
  } catch (error) {
    throw error;
  }
  //   console.log("FINAL", pictures);
};

const newPasswordChange = (hashedPassword, email) => {
  // console.log(hashedPassword, email);
  return database
    .query("UPDATE users SET hashed_password=? WHERE email =?", [
      hashedPassword,
      email,
    ])
    .then(([results]) => results);
};

const editUser = (body, user_id) => {
  return database
    .query("UPDATE users SET ? WHERE id=?", [body, user_id])
    .then(([results]) => results)
    .catch((err) => console.error(err));
};

module.exports = {
  getById,
  verifyByEmail,
  createUser,
  verifyRegisterEmail,
  findUserToLogin,
  newPasswordChange,
  getTravelMatesPicture,
  editUser,
};
