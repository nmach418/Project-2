const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});


const Hazard = new Schema({
  waterwayName: String,
  location: String,
  latLng: Number,      //if available
  hazDesc: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [Comment]      
});

module.exports = {
  Hazard: mongoose.model("Hazard", Hazard),
  Comment: mongoose.model("Comment", Comment)
};