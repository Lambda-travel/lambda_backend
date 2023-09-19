const database = require("../database/database.config");

const getById = (id) => {
  return database
    .query("SELECT * FROM destinations WHERE day_id=? ", id)
    .then(([results]) => results);
};

/************* DESTINATION DETAILS ***************************/
const destinationDetail = (id) => {
  // return database
  //   .query(
  //     "select * from destinations LEFT JOIN destination_images ON destinations.id = destination_images.destination_id where day_id=? ",
  //     id
  //   )
  return database
    .query("select * from destinations WHERE id = ?", id)
    .then(([results]) => results);
};

const destinationDetailImages = (id) => {
  return database
    .query("select * from destination_images WHERE destination_id = ?", id)
    .then(([results]) => results);
};

/************* DESTINATION DETAILS TO THE CARD***************************/

const destinationDetailCard = (id) => {
  // return database
  //   .query(
  //     "select * from destinations LEFT JOIN destination_images ON destinations.id = destination_images.destination_id where day_id=? ",
  //     id
  //   )
    return database
      .query(
        "SELECT d.id AS destination_id, d.place_to_visit, d.location, d.description, (SELECT image_url FROM destination_images AS di WHERE di.destination_id = d.id ORDER BY di.created_at ASC LIMIT 1) AS image_url FROM destinations AS d WHERE d.day_id = ?",
        id
      )
    .then(([results]) => results);
};

// const destinationDetailImages = (id) => {
//   //   return database
//   //     .query(
//   //       "select * from destinations LEFT JOIN destination_images ON destinations.id = destination_images.destination_id where day_id=? ",
//   //       id
//   //     )
//   return database
//     .query("select * from destination_images where day_id=? ", id)
//     .then(([results]) => results);
// };

/***************   CREATE DESTINATION  ********************/

const createDestination = (data) => {
  //   return database
  //     .query(
  //       `INSERT INTO destinations (place_to_visit,location,description,day_id) VALUES ('${place_to_visit}','${location}','${description}',${id})`
  //     )

  return database
    .query("INSERT INTO destinations SET ?", data)
    .then(([results]) => results);
};
/************* DESTINATION IMAGES ***************************/

const destinationImages = (data) => {
  // return database.query(`INSERT INTO destination_images (destination_id,image_url) VALUES ('${image}','${id}')`)
  //     .then(([results])=>results)

  return database
    .query("INSERT INTO destination_images SET ?", data)
    .then(([results]) => results);
};

module.exports = {
  getById,
  createDestination,
  destinationDetail,
  destinationImages,
  destinationDetailImages,
  destinationDetailCard,
};
