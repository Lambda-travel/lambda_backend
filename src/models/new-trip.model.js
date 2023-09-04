const database = require('../database/database.config')



const createNewTrip =(trip)=>{
    return database.query('INSERT INTO trips SET ?', trip)
        .then(([results])=> results);
}

module.exports={
    createNewTrip
}


// CREATE FUNCTION generate_date_range(
//     start_date DATE,
//     end_date DATE,
//     trip_id INT
// ) RETURNS INT READS SQL DATA BEGIN WHILE start_date <= end_date DO
// INSERT INTO
//     number_days (day, trip_id)
// VALUES
//     (start_date, trip_id);

// SET
//     start_date = DATE_ADD(start_date, INTERVAL 1 DAY);

// END WHILE;

// RETURN 1;

// END;

// -- Call the function for each trip
// SELECT
//     generate_date_range('2023-09-01', '2023-09-07', 1);

// SELECT
//     generate_date_range('2023-08-15', '2023-08-21', 2);