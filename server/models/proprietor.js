"use strict";
const cuid = require("cuid");
module.exports = (sequelize, DataTypes) => {
  const Proprietor = sequelize.define(
    "Proprietor",
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
  Proprietor.associate = models => {
    Proprietor.hasMany(models.Subject, {
      foreignKey: "proprietorId",
      as: "subjects"
    });
    Proprietor.hasMany(models.Teacher, {
      foreignKey: "proprietorId",
      as: "teachers"
    });
  };

  return Proprietor;
};
