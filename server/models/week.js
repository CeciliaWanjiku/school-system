"use strict";
const cuid = require("cuid");
module.exports = (sequelize, DataTypes) => {
  const Week = sequelize.define(
    "Week",
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
  Week.associate = function(models) {
    Week.hasMany(models.Grade, {
      foreignKey: "week",
      as: "grades",
      sourceKey: "name"
    });
  };
  return Week;
};
