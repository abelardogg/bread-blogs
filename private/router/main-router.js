const Home = require('../controller/home.js');
const User = require('../controller/user.js');
const Blog = require('../controller/blog.js')
module.exports = function(app){
    app
    .use('/', Home)
    .use('/user', User)
    .use('/blog', Blog);
};
