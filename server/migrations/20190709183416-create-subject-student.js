"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("SubjectStudents", {
      studentId: {
        type: Sequelize.STRING,
        onUpdate: "CASCADE",
        references: {
          model: "Users",
          as: "subjects"
        }
      },
      subjectId: {
        type: Sequelize.STRING,
        onUpdate: "CASCADE",
        references: {
          model: "Subjects",
          as: "students"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("SubjectStudents");
  }
};
