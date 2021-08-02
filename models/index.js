const User = require('./User.js');
const Comment = require('./Comment.js');
const Post = require('./Post.js');

User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'postId'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = { 
User, Comment, Post };