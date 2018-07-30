// Connection to navhazards db
const  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/navhaz");  // Discuss navhazards db name
mongoose.Promise = Promise;   // Research Promise again - used in place of callbacks

module.exports = mongoose;