// Connection to navhazards db
const  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/navhazards");
mongoose.Promise = Promise;   // Research Promise again

module.exports = mongoose;