const express = require('express');
const router = express.Router();
const blogRepository = require('../repository/blogRepository.js');

router.get('/create', function(req, res, next){
   
    res.render('blog/create');
});

router.post('/create', async function(req, res, next){
    let blog = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        tags: 'test',
        date: Date()
    };

    try{
        let createBlogEntry = await blogRepository.createBlogEntry(blog);
        res.send({message: `blog entry created`, blog});

    } catch(err) {
        console.error(err)
        res.send({message: "error while trying to creating blog entry"})
    }

});

module.exports = router;
