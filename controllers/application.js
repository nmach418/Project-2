// Test code derived from Tweeter
const { Hazard } = require("../models/Hazard");

module.exports = {
    // decided against moving this index into the hazards controller - after talking with Don will stick with the tweeter architecture instead.
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