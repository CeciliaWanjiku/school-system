const usersController = require("../controllers").users;
const subjectsController = require("../controllers").subjects;
const weekController = require("../controllers").weeks;
const gradeController = require("../controllers").grades;
const authenticate = require("./authenticate");

module.exports = app => {
  app.get("/", (req, res) =>
    res.status(200).send({
      message: "Welcome"
    })
  );

  app.post("/signup/teacher", usersController.createTeacher);
  app.post("/signup/student", usersController.createStudent);
  app.post("/signup/proprietor", usersController.createProprietor);

  app.post("/login", usersController.login);

  app.use("/", authenticate.token);
  app.get("/teachers", usersController.allTeachers);

  app.post("/subject", subjectsController.createSubject);
  app.get("/subjects", subjectsController.listSubjects);

  app.post("/week", weekController.createWeek);
  app.get("/week", weekController.listWeeks);

  app.post("/grade", gradeController.grade);
  app.get("/grade", gradeController.listGrades);
  app.get("/grade/student", gradeController.retrieveStudentGrade);
  app.put("/grade/:week/:assignedTo", gradeController.updateGrade);
};
