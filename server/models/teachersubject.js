"use strict";
module.exports = (sequelize, DataTypes) => {
  const TeacherSubject = sequelize.define(
    "TeacherSubject",
    {
      teacherId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  return TeacherSubject;
};
