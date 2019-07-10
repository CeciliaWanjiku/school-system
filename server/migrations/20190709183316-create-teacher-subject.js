"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("TeacherSubjects", {
      teacherId: {
        type: Sequelize.STRING,
        onUpdate: "CASCADE",
        references: {
          model: "Users",
          as: "teacherId"
        }
      },
      subjectId: {
        type: Sequelize.STRING,
        onUpdate: "CASCADE",
        references: {
          model: "Subjects",
          as: "subjectId"
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
    return queryInterface.dropTable("TeacherSubjects");
  }
};
