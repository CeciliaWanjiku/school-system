const User = require("../models").User;

const create = ({ name, password, role }) => {
  // Create user
  return User.create({
    name,
    password,
    role
  });
};

export const createTeacher = async (req, res) => {
  const teacher = await create({ ...req.body, role: "teacher" });

  return res.status(201).send(teacher);
};

export const createStudent = async (req, res) => {
  const student = await create({ ...req.body, role: "student" });

  return res.status(201).send(student);
};

// export const allTeachers = (req, res) => {
//   const teacher = () => {
//     return User.findAll({
//       where: {
//         role: "teacher"
//       }
//     });
//   };
//   console.log("teachetmm");
//   return res.status(200).send(teacher());
// };
module.exports = {
  allTeachers(req, res) {
    return User.findAll({
      where: {
        role: "teacher"
      }
    })
      .then(teachers => res.status(200).send(teachers))
      .catch(error => res.status(400).send(error));
  },

  allStudents(req, res) {
    return User.findAll({
      where: {
        role: "student"
      }
    })
      .then(teachers => res.status(200).send(teachers))
      .catch(error => res.status(400).send(error));
  }
};
