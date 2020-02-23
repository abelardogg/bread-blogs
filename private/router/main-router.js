const Home = require('../controller/home.js');
const About =  require('../controller/about.js');
const Archive = require('../controller/archive.js');
const User = require('../controller/user.js');
const Blog = require('../controller/blog.js')
module.exports = function(app){
    app
    .use('/', Home)
    .use('/about', About)
    .use('/archive', Archive)
    .use('/user', User)
    .use('/blog', Blog);
};
