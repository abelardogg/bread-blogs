const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const result = dotenv.config();
 
if (result.error) {
  throw result.error
}

require('./private/db/mongoose-connection.js');
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

require('./private/router/main-router.js')(app);

app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});