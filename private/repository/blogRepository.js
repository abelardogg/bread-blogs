const mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    tags: String,
    date: String,
});

function createBlogEntry(blogContent){
    let blogModel = mongoose.model('blogs', blogSchema);
    let blogEntry = new blogModel(blogContent);

    blogEntry.save(function(err, blogEntry){
        if(err){
            return console.log(blogEntry, err);
        }
    });

}

module.exports = {
    createBlogEntry
}
