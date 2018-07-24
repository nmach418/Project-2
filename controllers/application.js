// Test code derived from Tweeter
const { Hazards } = require("../models/Hazards");

module.exports = {
    index: (req, res) => {
        Hazard.find({})
            .sort({ createdAt: -1 })
            .limit(10)
            .populate("author")
            .then(hazards => {
                res.render("app/index", { hazards })
            });
    }
};