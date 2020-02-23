const mongoose = require('mongoose');

let articleSchema = new mongoose.Schema({
    title: String,
    shortDescription: String,
    author: String,
    content: String,
    tags: String,
    date: String,
});

function createArticle(blogContent){
    let articleModel = mongoose.model('articles', articleSchema);
    let article = new articleModel(blogContent);

    article.save(function(err, article){
        if(err){
            return console.log(article, err);
        }
    });

}

module.exports = {
    createArticle
}
