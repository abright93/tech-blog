const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models/');

router.get('/', withAuth, async (req, res) => {
 try{ 
  const commentData = await Comment.findAll({
    include: [User],
  });

  const comments = commentData.map((comment) => comment.get({ plain: true }));

  console.log(comments);
  
  res.render('single-post', {comments, loggedIn: req.session.loggedIn});
} catch(err) {
    res.status(500).json(err);
}
});

router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newComment = await Comment.create({
      ...body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
