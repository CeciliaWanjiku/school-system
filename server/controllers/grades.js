const Week = require("../models").Week;
const Grade = require("../models").Grade;

module.exports = {
  grade(req, res) {
    console.log(">>>>>", req.body);
    return Grade.create({
      name: req.body.name,
      subjectId: req.body.subjectId,
      assignedBy: req.body.teacherId,
      assignedTo: req.body.studentId,
      weekId: req.body.weekId
    })
      .then(grade => res.status(201).send(grade))
      .catch(error => res.status(400).send(error));
  },

  listGrades(req, res) {
    return Grade.findAll()
      .then(grade => res.status(200).send(grade))
      .catch(error => res.status(400).send(error));
  }
};
