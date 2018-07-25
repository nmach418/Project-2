// Connection to navhazards db
const  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/navhazards");  // Discuss navhazards db name
mongoose.Promise = Promise;   // Research Promise again

module.exports = mongoose;