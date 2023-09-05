const database = require('../database/database.config')



const createNewTrip =(trip)=>{
    return database.query('INSERT INTO trips SET ?', trip)
        .then(([results])=> results);
}


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
  }
  

module.exports={
    createNewTrip,
    generateDateRange,
    createNewTravelMateTrip,
}
