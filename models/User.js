const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
    local: {
        email: String,
        password: String
    },
    hazards: [
        { 
            type: Schema.Types.ObjectId,
            ref: "Hazard"  
        }
    ]
});

module.exports = mongoose.model("User", User);