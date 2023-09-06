
const database = require("../database/database.config");

const createNewTrip = (trip) => {
  return database
    .query("INSERT INTO trips SET ?", trip)
    .then(([results]) => results);
};


const createNewTravelMateTrip =(data)=>{
  return database.query('INSERT INTO travel_mates SET ?', data)
      .then(([results])=> results);
    }

const generateDateRange = async(startDate, endDate, tripId) => {
    let currentDate = new Date(startDate);
    const endDateObj = new Date(endDate);
    
    try {
      while (currentDate <= endDateObj) {
        const formattedDate = currentDate.toISOString().split('T')[0];
  
        await database.execute('INSERT INTO number_days (day, trip_id) VALUES (?, ?)', [
          formattedDate,
          tripId,
        ]);
  
        currentDate.setDate(currentDate.getDate() + 1);
      }
    } catch (error) {
      throw error;
      
    }

  return 1;
};
  /*************** GET LIST OF DAYS FROM TRIP ************************/
  
  const getAllDays =(id)=> {
    return database.query("SELECT * FROM number_days where trip_id=?",id)
    .then(([result])=> result)
  }


 /*************** GET INFO OF ONE TRIP BY ID ************************/
  const getInfoOfTrip =(id)=>{
    return database.query("SELECT * FROM trips WHERE id=?",id)
    .then(([result])=> result)
  }

/***************** PLACE TO VISIT ***************************/

const placeToVisit =(id)=>{
return database.query("SELECT * FROM places_to_visit WHERE trip_id=?",id)
.then(([result])=> result )
}


const getAllTrips = (id) => {
  return database
    .query(" SELECT * FROM trips WHERE user_id = ?", id)
    .then(([results]) => results);
};

const getPlacesToVisit = (id) => {
  return database
    .query(
      "SELECT COUNT(*) AS total_places FROM places_to_visit WHERE trip_id=?",
      id
    )
    .then(([results]) => results);
};



module.exports={
    createNewTrip,
    generateDateRange,
    getAllDays,
    createNewTravelMateTrip,
    getAllTrips,
    placeToVisit,
    getPlacesToVisit,
    getInfoOfTrip
}

