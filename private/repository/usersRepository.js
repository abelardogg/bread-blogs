 const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    username: String
  });

function createUser(name, username){
    let User = mongoose.model('users', userSchema);
    let newUser = new User({ name: name, username: username });

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