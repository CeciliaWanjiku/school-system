"use strict";
const cuid = require("cuid");
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    "Teacher",
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
  Teacher.associate = models => {
    Teacher.belongsToMany(models.Subject, {
      through: "TeacherSubject",
      foreignKey: "teacherId",
      as: "subjects",
      otherKey: "subjectId"
    });
    Teacher.belongsTo(models.Proprietor, {
      foreignKey: "proprietorId"
    });
    Teacher.hasMany(models.Student, {
      foreignKey: "teacherId",
      as: "students"
    });
  };

  return Teacher;
};
