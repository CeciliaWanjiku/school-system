const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//this is not safe
const secretKey = process.env.SECRET_KEY;
const saltRounds = 10;

const create = ({ name, password, email, role }) => {
  // Create user
  if (!email && !password) {
    res.json({ success: false, msg: "Please add an email and password." });
    // email regex
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return res
      .status(401)
      .json({ message: "Please enter a valid email format" });
  } else {
    return User.create({
      name,
      email,
      password: bcrypt.hashSync(password, saltRounds),
      role
    });
  }
};

export const createTeacher = async (req, res) => {
  const teacher = await create({ ...req.body, role: "teacher" });

  return res.status(201).send(teacher);
};

export const createStudent = async (req, res) => {
  const student = await create({ ...req.body, role: "student" });

  return res.status(201).send(student);
};
export const createProprietor = async (req, res) => {
  const student = await create({ ...req.body, role: "proprietor" });

  return res.status(201).send(student);
};

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
  },

  login(req, res) {
    if (!req.body.email || !req.body.password) {
      res.json({ success: false, msg: "Please provide email and password." });
    } else {
      User.findOne({ where: { email: req.body.email } })
        .then(response => {
          if (!response) {
            return res.status(404).send({
              message: "User Not Found"
            });
          }
          const passwordValid = bcrypt.compareSync(
            req.body.password,
            response.password
          );
          if (passwordValid) {
            const token = jwt.sign(
              {
                data: {
                  id: response.id,
                  name: response.name,
                  email: response.email,
                  role: response.role
                }
              },
              secretKey,
              { expiresIn: 60 * 60 }
            );
            return res.status(200).json(
              Object.assign(
                {},
                {
                  id: response.id,
                  email: req.body.email,
                  name: req.body.name
                },
                { token }
              )
            );
          }
          return res.status(401).json({
            message: "Invalid password"
          });
        })
        .catch(err => console.log(err));
    }
  }
};
