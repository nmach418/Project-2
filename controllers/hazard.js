
const { Hazard, Comment } = require("../models/Hazard"); // Think. 'Comment' may in it's own controller.
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
        Comment.populate(hazards.comments, { path: "author" }, function(    // Think. 'Comment'.
          err,
          comments      // Think. 'comments'.
        ) {
          hazards.comments = comments;        // Think. 'comments'.
          res.render("hazards/show", hazards);
        });
      });
  },
  new: (req, res) => {
    User.find({}).then(users => {
      res.render("hazards/new", { users });
    });
  },
  create: (req, res) => {
    Hazard.create({
      content: req.body.hazards.content,
      author: req.body.author
    }).then(hazards => {
      User.findOne({ _id: req.body.author }).then(user => {
        user.hazards.push(hazards);
        user.save(err => {
          res.redirect(`/hazards/${hazards._id}`);
        });
      });
    });
  },
  update: (req, res) => {
    let { content, author } = req.body;
    Hazard.findOne({ _id: req.params.id }).then(hazards => {
      hazards.comments.push({         // Think. 'comments'.
        content,
        author
      });
      hazards.save(err => {
        res.redirect(`/hazards/${hazards._id}`);
      });
    });
  },
  delete: (req, res) => {
    Hazard.findOneAndRemove({ _id: req.params.id }).then(hazards => {
      res.redirect('/')
    })
  }
};