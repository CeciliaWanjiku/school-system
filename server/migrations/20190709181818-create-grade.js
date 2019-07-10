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
      subject: {
        type: Sequelize.STRING,
        references: {
          model: "Subjects",
          as: "grades",
          key: "name",
          allowNull: false
        }
      },
      assignedBy: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          as: "teacher",
          allowNull: false
        }
      },
      assignedTo: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "email",
          as: "assignedTo",
          allowNull: false
        }
      },
      week: {
        type: Sequelize.STRING,
        references: {
          model: "Weeks",
          as: "grades",
          key: "name",
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
