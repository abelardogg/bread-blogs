 const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    username: String
  });

function createUser(name, username){
    var User = mongoose.model('users', userSchema);
    var newUser = new User({ name: name, username: username });

    newUser.save(function (err, newUser) {
        if (err) {
            return console.error(err);
        }
        console.log(`new user ${username} created!`)
      });
}

module.exports = {
    createUser
}