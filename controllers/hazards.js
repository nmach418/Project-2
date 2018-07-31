const { Hazards, Comment } = require("../models/Hazards"); // Think. 'Comment' may in it's own controller.
const User = require("../models/User");

module.exports = {
  show: (req, res) => {
    Hazards.findOne({ _id: req.params.id })
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
    Hazards.create({
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
    Hazards.findOne({ _id: req.params.id }).then(hazards => {
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
    Hazards.findOneAndRemove({ _id: req.params.id }).then(hazards => {
      res.redirect('/')
    })
  }
};