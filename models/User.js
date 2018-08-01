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
            ref: "Hazard"  // Double check... consider changing related model/Hazards.js file name from Hazards to Hazard???
            // Note: ref means reference another model. In the current case, Hazards.
        }
    ]

});


// NOTE: Revisit this file later to include bcrypt code.

// TEMP Description of this file: Required the connection.js file and saved it to the variable mongoose. Imported Schema from mongoose.Schema. Defined a User schema using mongoose's .Schema() method. Exported schema using module.exports and mongoose.model().

module.exports = mongoose.model("User", User);   // Discuss "User", User