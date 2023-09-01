const Articles= require('../models/articles.model')



const getAllArticles= (req, res)=>{
 Articles.getAll()
 .then((results)=>{
    if(results != null && results.length > 0){
        res.status(200).send(results)
    }else{
        res.status(404).send('Articles not found')
    }
 })
 .catch((err)=>{
    console.error(err);
    res.status(500).send('Error retrieving articles from database')
 })
}

const getArticlesById=(req, res)=>{
    const id = Number(req.params.id)
    Articles.getById(id)
        .then((results)=>{
            if(results !== null && results.length>0){
                res.status(200).send(results);
            }else{
                res.status(404).send(`Article with the id: ${id} not found`)
            }
        })
        .catch((err)=>{
        console.error(err);
        res.status(500).send('Error retrieving the article from the database')
    })
}



module.exports={
    getArticlesById,
    getAllArticles,
}