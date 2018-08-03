// Connection to navhaz db
const  mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/navhaz"); 

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect("mongodb://localhost/navhaz");
  }

mongoose.Promise = Promise;   

module.exports = mongoose;