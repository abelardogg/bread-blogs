const express = require('express');
const router = express.Router();
const Users = require('../repository/usersRepository.js');

router.post('/create', async function(req, res, next){
    let userName = req.body.name;
    let userUsername = req.body.user;
    try{
       let createUser = await Users.createUser(userName, userUsername);
       res.send({message: `user ${userUsername} created`})
    }catch(e){
        console.error(e)
        res.send({message: "error while creating user"})
    }
});

module.exports = router;
