const usersController = require("../controllers").users;
const subjectsController = require("../controllers").subjects;
const weekController = require("../controllers").weeks;
const gradeController = require("../controllers").grades;

module.exports = app => {
  app.get("/", (req, res) =>
    res.status(200).send({
      message: "Welcome"
    })
  );

  app.post("/teacher", usersController.createTeacher);
  app.post("/student", usersController.createStudent);
  app.get("/teachers", usersController.allTeachers);

  app.post("/subject", subjectsController.createSubject);
  app.get("/subject", subjectsController.listSubjects);

  app.post("/week", weekController.createWeek);
  app.get("/week", weekController.listWeeks);

  app.post("/grade", gradeController.grade);
  app.get("/grade", gradeController.listGrades);
};
