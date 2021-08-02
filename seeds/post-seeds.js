const { Post } = require('../models');

const postdata = [{
    title: "Tech Blog's first post",
    content: "first one here! :)",
    user_id: 1
  },
  {
    title: "What's your favoring coding language?",
    content: "I personally think they're all great #equality",
    user_id: 2
  },
    ]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;