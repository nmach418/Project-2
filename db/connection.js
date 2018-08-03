// Connection to navhaz db
const  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/navhaz"); 
mongoose.Promise = Promise;   

module.exports = mongoose;