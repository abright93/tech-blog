const { Comment } = require('../models');

const commentData = [{
    content: 'Ahh, you beat me to it',
    user_id: "2",
    post_id: "1"
  },
  {
    content: 'Hi guys!',
    user_id: "3",
    post_id: "1"
  },
  {
    content: 'Im a huge fan of Javascript myself',
    user_id: "1",
    post_id: "2"
  },
  ]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;