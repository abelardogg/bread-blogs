const express = require('express');
const router = express.Router();
const articleRepository = require('../repository/articleRepository.js');

router.get('/create', function(req, res, next){
    res.render('article/create');
});

router.post('/create', async function(req, res, next){
    let article = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        tags: 'test',
        date: Date()
    };

    try{
        let createArticle = await articleRepository.createArticle(article);
        res.send({message: `article entry created`, article});

    } catch(err) {
        console.error(err)
        res.send({message: "error while trying to creating article entry"})
    }

});

module.exports = router;
