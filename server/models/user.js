"use strict";
const cuid = require("cuid");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
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
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM(["proprietor", "teacher", "student"]),
        allowNull: false
      }
    },
    {}
  );
  User.associate = function(models) {
    User.belongsToMany(models.Subject, {
      through: "TeacherSubject",
      foreignKey: "teacherId",
      as: "subjects",
      otherKey: "subjectId"
    });
    User.belongsToMany(models.Subject, {
      foreignKey: "studentId",
      through: "SubjectStudent",
      as: "students",
      otherKey: "subjectId"
    });
    User.hasMany(models.Grade, {
      foreignKey: "assignedTo",
      as: "grades",
      sourceKey: "email"
    });
  };
  return User;
};
