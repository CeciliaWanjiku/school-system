const usersController = require("../controllers").users;

module.exports = app => {
  app.get("/", (req, res) =>
    res.status(200).send({
      message: "Welcome"
    })
  );

  app.post("/teacher", usersController.createTeacher);
  app.post("/student", usersController.createStudent);
  app.get("/teachers", usersController.allTeachers);
};
