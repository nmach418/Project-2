// Connection to navhazards db
const  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/navhaz");  // Discuss navhazards db name
mongoose.Promise = Promise;   // Research Promise again

module.exports = mongoose;