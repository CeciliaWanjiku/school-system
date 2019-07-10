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
      foreignKey: "subject",
      targetKey: "name"
    });
    Grade.belongsTo(models.User, {
      foreignKey: "assignedBy"
    });
    Grade.belongsTo(models.User, {
      foreignKey: "assignedTo",
      targetKey: "email"
    });
    Grade.belongsTo(models.Week, {
      foreignKey: "week",
      targetKey: "name"
    });
  };
  return Grade;
};
