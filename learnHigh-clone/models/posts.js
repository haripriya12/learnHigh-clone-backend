'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    titleDescription: DataTypes.STRING,
    subDomain: DataTypes.INTEGER,
    readTime: DataTypes.INTEGER,
    postDescription: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    models.Post.belongsTo(models.user, { 
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Post;
};


 

// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var User = sequelize.define('User', {
//     username: DataTypes.STRING
//   });

//   User.associate = function(models) { 
//     models.User.hasMany(models.Task);
//   };

//   return User;
// };
