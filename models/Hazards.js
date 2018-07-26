const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Hazards = new Schema({
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
  }
});

module.exports = {
  Hazards: mongoose.model("Hazards", Hazards)
};