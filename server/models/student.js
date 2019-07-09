"use strict";
const cuid = require("cuid");
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      id: {
        type: DataTypes.STRING,
        defaultValue: () => cuid(),
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Student.associate = function(models) {
    Student.hasMany(models.Grade, {
      foreignKey: "studentId",
      as: "grades"
    });
    Student.belongsToMany(models.Subject, {
      foreignKey: "studentId",
      through: "SubjectStudent",
      as: "students"
    });
    // Student.belongsTo(models.Teacher, {
    //   foreignKey: "teacherId"
    // });
  };
  return Student;
};
