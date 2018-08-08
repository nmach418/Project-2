
const { Hazard, Comment } = require("../models/Hazard");
const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    Hazard.find({})
        .sort({ createdAt: -1 })
        .limit(10)
        .populate("author")
        .then(hazards => {
            res.render("app/index", { hazards })
        });
      },
  show: (req, res) => {
    Hazard.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, hazards) {
        Comment.populate(hazards.comments, { path: "author" }, function(   
          err,
          comments     
        ) {
          hazards.comments = comments;     
          res.render("hazard/show", hazards);
        });
      });
  },
  new: (req, res) => {
    User.find({}).then(users => {
      res.render("hazard/new", { users });
    });
  },
  create: (req, res) => {
    Hazard.create({
      waterwayName: req.body.hazard.waterwayName,
      location: req.body.hazard.location,
      latLng: req.body.hazard.latLng,
      hazDesc: req.body.hazard.hazDesc
    }).then(hazard => {
      User.findOne({ _id: req.body.author }).then(user => {
        user.hazards.push(hazard);
        user.save(err => {
          res.redirect(`/hazard/${hazard._id}`);
        });
      });
    });
  },
  update: (req, res) => {
    let { content, author } = req.body;
    Hazard.findOne({ _id: req.params.id }).then(hazards => {
      hazards.comments.push({        
        content,
        author
      });
      hazards.save(err => {
        res.redirect(`/hazard/${hazard._id}`);
      });
    });
  },
  delete: (req, res) => {
    Hazard.findOneAndRemove({ _id: req.params.id }).then(hazards => {
      res.redirect('/')
    })
  }
};