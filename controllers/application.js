// Test code derived from Tweeter
const { Hazards } = require("../models/Hazards");

module.exports = {
    // move this index into the hazards controller
    index: (req, res) => {
        Hazards.find({})
            .sort({ createdAt: -1 })
            .limit(10)
            .populate("author")
            .then(hazards => {
                res.render("app/index", { hazards })
            });
    }
};