'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    postid: DataTypes.INTEGER,
    commentData: DataTypes.STRING,
    commentBy: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    models.Comment.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    }); 
  };
  return Comment;
};

 
 



// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var Task = sequelize.define('Task', {
//     title: DataTypes.STRING,
//     tag: DataTypes.STRING
//   });

//   Task.associate = function (models) {
//     models.Task.belongsTo(models.User, {
//       onDelete: "CASCADE",
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

//   return Task;
// };
