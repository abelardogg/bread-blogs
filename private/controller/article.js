const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const articleRepository = require('../repository/articleRepository.js');

router.get('/read/:articleId', async function(req, res, next){
    const articleId = Number(req.params.articleId);
    try {
        let article = await articleRepository.findArticle(articleId);
        console.log(article);


        // TODO create validation for hidden articles
        if(!!article){
            res.render('article/read', {article: article, error: null});
        } else {
            res.render('article/read', {error: `The article ${articleId} doesn't exist.`});
        }
    } catch (error) {
        console.error(error);
        res.send({error: 'something went wrong'});
    }
    
});

router.get('/create', function(req, res, next){
    res.render('article/create');
});

router.post('/create', async function(req, res, next){
    const articleId = new Date().getTime();
    const articleCreatedDate = Date();

    let article = {
        articleId: articleId,
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        author: req.body.author,
        createdBy: req.body.author, // TODO change to username
        updatedBy: req.body.author, // TODO change to username
        content: req.body.content,
        tags: 'test',
        dateCreated: articleCreatedDate,
        dateUpdate: articleCreatedDate,
        hidden: 'false'
    };


    let articleModel = mongoose.model('articles', articleRepository.articleSchema);
    let newArticle = new articleModel(article);

    try{
        await newArticle.save(function (err, response) {
            if (err) {
                throw err;
            }
            console.log('article created', response);
            res.send({ message: `article entry created`, response });
        });

        

    } catch(err) {
        console.error(err)
        res.send({message: "error while trying to creating article entry"})
    }

});

router.get('/update/:articleId', async function(req,res,next){
    const articleId = Number(req.params.articleId);
    try {
        let article = await articleRepository.findArticle(articleId);
        console.log(article);
        
        // TODO create validation for hidden articles

        if(!!article){
            res.render('article/update', {article: article, error: null});
        } else {
            res.render('article/update', {error: `The article ${articleId} doesn't exist.`});
        }
    } catch (error) {
        console.error(error);
        res.send({error: 'something went wrong'});
    }
});

module.exports = router;
