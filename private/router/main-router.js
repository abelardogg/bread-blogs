const Home = require('../controller/home.js');
const User = require('../controller/user.js');

module.exports = function(app){
    app
    .use('/', Home)
    .use('/user', User);
};
