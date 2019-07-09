"use strict";
const cuid = require("cuid");
module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define(
    "Grade",
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
  Grade.associate = function(models) {
    Grade.belongsTo(models.Subject, {
      foreignKey: "subjectId"
    });
    Grade.belongsTo(models.Student, {
      foreignKey: "studentId"
    });
    Grade.belongsTo(models.Week, {
      foreignKey: "weekId"
    });
  };
  return Grade;
};
