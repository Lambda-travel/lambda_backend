const Destination = require("../models/destination.model");

const getDestinationById = (req, res) => {
  const id = Number(req.params.id);

  Destination.getById(id)
    .then((results) => {
      if (results !== null && results.length > 0) {
        res.status(200).send(results);
      } else {
        res.status(404).send(`Destination with the id: ${id} not found`);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving user data from database");
    });
};
/************ DESTINATION DETAILS  ******************/

const destinationDetails = (req, res) => {
  const id = Number(req.params.id);
  Destination.destinationDetail(id)
    .then((results) => {
      if (results !== null) {
        let destinationInfo = results;
        Destination.destinationDetailImages(id)
          .then((results) => {
            let destinationImages = results;
            res.status(200).send({
              destinationInfo,
              destinationImages,
            });
          })
          .catch((err) => {
            console.error(err);
            res
              .status(500)
              .send("Error retrieving destination images from database");
          });
        // res.status(200).send(results);
      } else {
        res.status(404).send(`Destination with the id: ${id} not found`);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving destination data from database");
    });
};

const destinationDetailsCard = (req, res) => {
  const id = Number(req.params.id);
  Destination.destinationDetailCard(id)
    .then((results) => {
      if (results !== null) {
        res.status(200).send(results);
      } else {
        res.status(404).send(`Destination with the id: ${id} not found`);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving destination data from database");
    });
};

/*****************  CREATE DESTINATION  *****************/

const createDestination = (req, res) => {
  const id = Number(req.params.id);

  req.body.day_id = id;

  Destination.createDestination(req.body)
    .then((result) => {
      if (result.affectedRows > 0) {
        res.status(201).send({
          msg: "Destination created.",
          destinationId: result.insertId,
        });
      } else {
        res.status(403).send("Forbidden");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error creating destination in database");
    });
};

const createDestinationImages = (req, res) => {
  Destination.destinationImages(req.body)
    .then((imageAdded) => {
      if (imageAdded.affectedRows > 0) {
        res.status(201).send("Created destination with image");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving user data from database");
    });
};

module.exports = {
  getDestinationById,
  createDestination,
  destinationDetails,
  createDestinationImages,
  destinationDetailsCard,
};
