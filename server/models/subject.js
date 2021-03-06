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
        unique: true,
        allowNull: false
      }
    },
    {}
  );
  Subject.associate = function(models) {
    Subject.belongsToMany(models.User, {
      foreignKey: "subjectId",
      through: "TeacherSubject",
      as: "teachers",
      otherKey: "teacherId"
    });

    Subject.belongsToMany(models.User, {
      foreignKey: "subjectId",
      through: "SubjectStudent",
      as: "students"
    });

    Subject.hasMany(models.Grade, {
      foreignKey: "subject",
      as: "grades",
      sourceKey: "name"
    });
  };
  return Subject;
};
