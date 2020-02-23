const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.render('archive.html')
});

module.exports = router;
