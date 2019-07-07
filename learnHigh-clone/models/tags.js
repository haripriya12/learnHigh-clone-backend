'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    postid: DataTypes.INTEGER,
    tag: DataTypes.STRING
  }, {});
  // Tags.associate = function(models) {
  //   // associations can be defined here
  // };
  return Tag;
}; 