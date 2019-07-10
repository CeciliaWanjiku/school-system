"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Grades", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      subjectId: {
        type: Sequelize.STRING,
        references: {
          model: "Subjects",
          as: "grades",
          allowNull: false
        }
      },
      assignedBy: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          as: "grades",
          allowNull: false
        }
      },
      assignedTo: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          as: "grades",
          allowNull: false
        }
      },
      weekId: {
        type: Sequelize.STRING,
        references: {
          model: "Weeks",
          as: "grades",
          allowNull: false
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
    return queryInterface.dropTable("Grades");
  }
};
