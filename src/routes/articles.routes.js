const express = require('express');
const articlesRouter = express.Router();
const ArticlesController= require('../controller/articles.controller');

//* /articles
articlesRouter.get('/', ArticlesController.getAllArticles);
articlesRouter.get('/:id', ArticlesController.getArticlesById);


module.exports = articlesRouter