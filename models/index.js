const User = require('./user.js');
const Comment = require('./comment.js');
const Post = require('./post.js');

User.hasMany(Post,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Post.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
  });
  
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = { 
User, Comment, BlogPost };