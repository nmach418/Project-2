// Test code derived from Tweeter
const { Hazard } = require("../models/Hazard");

module.exports = {
    // move this index into the hazards controller
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