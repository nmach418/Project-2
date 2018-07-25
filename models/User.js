const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// Per mongoose lesson: initialize the schema with a configuration object
const User = new Schema({
    //local and 'hazards' vice 'tweets' are our properties? Try it!
    local: {
        email: String,
        password: String
    },
    hazards: [
        { 
            type: Schema.Types.ObjectId,
            ref: "Hazards"  // Double check... consider changing related model/Hazards.js file name from Hazards to Hazard???
            // Note: ref means reference another model. In the current case, Hazards.
        }
    ]

});


// NOTE: Revisit this file later to include bcrypt code.

module.exports = mongoose.model("User", User);   // Discuss "User", User