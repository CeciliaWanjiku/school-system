"use strict";
module.exports = (sequelize, DataTypes) => {
  const SubjectStudent = sequelize.define(
    "SubjectStudent",
    {
      subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  return SubjectStudent;
};
