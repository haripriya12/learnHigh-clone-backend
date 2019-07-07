'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true, 
        primaryKey: true, 
        type: Sequelize.INTEGER
      },
      userId: {
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      titleDescription: {
        type: Sequelize.STRING
      },
      subDomain: {
        type: Sequelize.INTEGER
      },
      readTime: {
        type: Sequelize.INTEGER
      },
      postDescription: {
        type: Sequelize.STRING
      },
      tag: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Posts');
  }
};