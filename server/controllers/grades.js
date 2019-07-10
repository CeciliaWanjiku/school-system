const Week = require("../models").Week;
const Grade = require("../models").Grade;
const Subject = require("../models").Subject;

module.exports = {
  grade: async (req, res) => {
    const week = await Week.findOrCreate({
      where: {
        name: req.body.week
      }
    });
    const gradeExists = await Grade.findOne({
      where: {
        assignedTo: req.body.assignedTo,
        week: week[0].dataValues.name,
        subject: req.body.subject
      }
    });
    if (gradeExists) {
      return res.status(400).send({
        message: "You can only grade a student once per week, per subject"
      });
    }
    Subject.findOne({
      where: {
        name: req.body.subject
      }
    }).then(response => {
      // Check if subject exists
      if (!response) {
        return res.status(404).send({
          message: "Subject not Found"
        });
      }
    });
    // Check if subject is given
    if (!req.body.subject) {
      return res.status(404).send({
        message: "Please provide a subject"
      });
    }
    if (req.user.role !== "teacher") {
      return res.status(403).send({
        message: "Only teachers can grade"
      });
    }
    return Grade.create({
      name: req.body.name,
      subject: req.body.subject,
      assignedBy: req.user.id,
      assignedTo: req.body.assignedTo,
      week: week[0].dataValues.name
    })
      .then(grade => res.status(201).send(grade))
      .catch(error => res.status(400).send(error));
  },

  listGrades(req, res) {
    if (req.user.role === "student") {
      return res.status(403).send({
        message: "You can only view your grades"
      });
    }
    return Grade.findAll()
      .then(grade => res.status(200).send(grade))
      .catch(error => res.status(400).send(error));
  },

  retrieveStudentGrade(req, res) {
    return Grade.findAll({
      where: {
        assignedTo: req.user.email
      }
    })
      .then(grade => {
        if (!grade) {
          return res.status(404).send({
            message: "Grade not found"
          });
        }
        return res.status(200).send(grade);
      })
      .catch(error => res.status(400).send(error));
  },

  updateGrade: async (req, res) => {
    const studentWeekGrade = await Grade.findOne({
      where: {
        assignedBy: req.user.id,
        subject: req.body.subject,
        week: req.params.week,
        assignedTo: req.params.assignedTo
      }
    });
    console.log(">>>>>>>>>>>>>>>", studentWeekGrade);
    // return Grade.update(req.params.assignedTo, req.params.week, {
    //   where: {
    //     studentWeekGrade
    //   },
    //   name: req.body.name,
    //   subject: req.body.subject
    // })
    //   .then(grade => res.status(200).send(grade))
    //   .catch(error => res.status(400).send(error));
  }
};
