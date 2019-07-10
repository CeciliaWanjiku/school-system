const Week = require("../models").Week;
const Grade = require("../models").Grade;

module.exports = {
  createWeek(req, res) {
    return Week.create({
      name: req.body.name
    })
      .then(subject => res.status(201).send(subject))
      .catch(error => res.status(400).send(error));
  },

  listWeeks(req, res) {
    return Week.findAll({
      include: [
        {
          model: Grade,
          as: "grades"
        }
      ]
    })
      .then(week => res.status(200).send(week))
      .catch(error => res.status(400).send(error));
  }
};
