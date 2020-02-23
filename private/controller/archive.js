const express = require('express');
const router = express.Router();
const articleRepository = require('../repository/articleRepository.js');

router.get('/', async function(req, res, next){
    try {
        let articlesList = await articleRepository.findArticlesList();
        console.log(articlesList);

        // TODO create validation for hidden articles

        res.render('archive', {articlesList:articlesList});
    } catch (error) {
        console.error(error);
        res.send({error: 'something went wrong'});
    }

    
});

module.exports = router;
