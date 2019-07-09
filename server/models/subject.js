"use strict";
const cuid = require("cuid");
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define(
    "Subject",
    {
      id: {
        type: DataTypes.STRING,
        defaultValue: () => cuid(),
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Subject.associate = function(models) {
    Subject.belongsToMany(models.Teacher, {
      foreignKey: "subjectId",
      through: "TeacherSubject",
      as: "teachers",
      otherKey: "teacherId"
    });

    Subject.belongsToMany(models.Student, {
      foreignKey: "subjectId",
      through: "SubjectStudent",
      as: "students"
    });

    Subject.belongsTo(models.Proprietor, {
      foreignKey: "proprietorId"
    });

    Subject.hasMany(models.Grade, {
      foreignKey: "subjectId",
      as: "grades"
    });
  };
  return Subject;
};
