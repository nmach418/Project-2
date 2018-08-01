const User = require("../models/User");
const { Hazard } = require("../models/Hazard");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.find({}).remove(() => {
  Hazard.find({}).remove(() => {
    let bugs = User.create({
      local: {
        email: "bugsbunny@gmail.com",
        password: createPassword("bugsbunny")
      }
    }).then( => {
      Promise.all([
        Hazard.create({
          content: "eh, what's up doc?",
          author: uuserser._id
        }).then(hazard => {
          user.hazards.push(hazard);
        }),
        Hazard.create({
          content: "That's all, folks!",
          author: user._id
        }).then(hazard => {
          user.hazards.push(hazard);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let daffy = User.create({
      local: {
        email: "daffyduck@gmail.com",
        password: createPassword("daffyduck")
      }
    }).then(user => {
      Promise.all([
        Hazard.create({
          content: "Who's this Duck Dodgers any how?",
          author: user._id
        }).then(hazard => {
          user.hazards.push(hazard);
        }),
        Hazard.create({
          content: "You're dethpicable.",
          author: user._id
        }).then(hazard => {
          user.hazards.push(hazard);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let elmer = User.create({
      local: {
        email: "elmerfudd@gmail.com",
        password: createPassword("elmerfudd")
      }
    }).then(user => {
      Promise.all([
        Hazard.create({
          content:
            "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
          author: user._id
        }).then(hazard => {
          user.hazards.push(hazard);
        }),

        Hazard.create({
          content: "Kiww da wabbit!",
          author: user._id
        }).then(hazard => {
          user.hazards.push(hazard);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });
  });
});