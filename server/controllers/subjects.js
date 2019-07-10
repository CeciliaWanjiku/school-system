const Subject = require("../models").Subject;
const User = require("../models").User;

module.exports = {
  createSubject(req, res) {
    if (req.user.role === "proprietor") {
      return Subject.create({
        name: req.body.name
      })
        .then(subject => res.status(201).send(subject))
        .catch(error => res.status(400).send(error));
    } else {
      return res.status(403).json({
        message: "Forbidden"
      });
    }
  },

  listSubjects(req, res) {
    return Subject.findAll({
      include: [
        {
          model: User,
          as: "teachers"
        }
      ]
    })
      .then(subject => res.status(200).send(subject))
      .catch(error => res.status(400).send(error));
  }
};
