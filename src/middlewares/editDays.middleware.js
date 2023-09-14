const trip = require("../models/new-trip.model")


const daysMiddleware =(req,res,next)=>{

    const id = req.params.id
    const {start_date,end_date} = req.body
    
    trip.getAllDays(id)
    
    .then((result)=>{

        const lastDateFromDataBase = result.slice(-1)[0].day
        const firstDateFromDataBase = result.slice(0)[0].day

        if(lastDateFromDataBase > end_date && start_date == undefined) {
            const daysToDelete = result.filter((day)=> ( day.day > end_date)) 
             for(dayId of daysToDelete) {
                 trip.deleteDaysTrip(dayId.id).catch((error)=>console.error(error))
             }
        }
         if (lastDateFromDataBase < end_date && start_date == undefined) {
             const lastDateID = result.slice(-1)[0].id
            
             trip.generateDateRange(lastDateFromDataBase,end_date,id).then((result)=>{
                if(result > 0){
                    return trip.deleteDaysTrip(lastDateID)
                }
             })

        }
/*-------------------- start date ---------------------*/


        if(firstDateFromDataBase < start_date && end_date == undefined) {
            const daysToDelete = result.filter((day)=> ( day.day < start_date)) 

             for(dayId of daysToDelete) {
                    trip.deleteDaysTrip(dayId.id).catch((error)=>console.error(error))
                }
            }

             if(start_date < firstDateFromDataBase && end_date == undefined) {
                 const deleteDay = result.slice(0)[0].id
                  trip.generateDateRange(start_date,firstDateFromDataBase,id).then((result)=>{
                      if(result > 0){
                          return trip.deleteDaysTrip(deleteDay)
                      }
                  })
             }


             /*--------------------- BETWEEN  -----------------*/


        if(start_date !== undefined && end_date !== undefined ) {
                const daysToDelete = result.filter((day)=> ( day.day < start_date || day.day > end_date )) 

                 for(dayId of daysToDelete) {
                    trip.deleteDaysTrip(dayId.id).catch((error)=>console.error(error))
                }
                const lastDateDay = result.slice(-1)[0].day
                const lastDateID = result.slice(-1)[0].id

                if(end_date > lastDateDay){
                    trip.generateDateRange(lastDateDay,end_date,id).then((result)=>{
                        if(result > 0){
                            return trip.deleteDaysTrip(lastDateID)
                        }
                    })
                }
                
                if(start_date < firstDateFromDataBase){
                    const deleteDay = result.slice(0)[0].id
                    trip.generateDateRange(start_date,firstDateFromDataBase,id).then((result)=>{
                        if(result > 0){
                            return trip.deleteDaysTrip(deleteDay)
                        }
                    })
                }


            }
    
            
    next()

})
.catch((error)=>{
    console.error(error)
    res.status(500).send('Error retrieving data from the database')
  });
}


module.exports = daysMiddleware