const mongoose = require('mongoose');

let articleSchema = new mongoose.Schema({
    articleId: Number,
    title: String,
    shortDescription: String,
    author: String,
    content: String,
    tags: String,
    date: String,
    hidden: String
});

function findArticle(articleId) {
    let articleModel = mongoose.model('articles', articleSchema);

    return articleModel.findOne({ articleId: articleId },
        function (err, response) {
            if (err) {
                return console.log(response, err);
            }
            console.log(response);
        })
        .exec();
}

function findArticlesList(){
    let articleModel = mongoose.model('articles', articleSchema);

    return articleModel.find({},
        function (err, response) {
            if (err) {
                return console.log(response, err);
            }
            console.log(response);
        })
        .exec();
}

module.exports = {
    articleSchema,
    findArticle,
    findArticlesList
}
