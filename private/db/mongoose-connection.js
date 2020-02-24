// Bring Mongoose into the app 
var mongoose = require( 'mongoose' ); 
 
// deprecation fixes
// https://mongoosejs.com/docs/deprecations.html
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Build the connection string 
var dbURI = process.env.MONGO_CONNECTION_STRING; 
 
// Create the database connection 
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
}); 
  
// If the connection throws an error
mongoose.connection.on('error',function (err) { 
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () { 
  console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {   
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 