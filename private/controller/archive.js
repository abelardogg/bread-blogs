const express = require('express');
const router = express.Router();
const articleRepository = require('../repository/articleRepository.js');

router.get('/', async function(req, res, next){
    try {
        let articles = await articleRepository.findArticlesList();
        console.log(articles);

        // TODO create validation for hidden articles

        res.render('archive.html');
    } catch (error) {
        console.error(error);
        res.send({error: 'something went wrong'});
    }

    
});

module.exports = router;
