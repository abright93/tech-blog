const router = require("express").Router();
const commentRoutes = require("./api/comment-routes");
const homeRoutes = require("./home-routes");
const postRoutes = require("./api/post-routes");
const userRoutes = require("./api/user-routes");

router.use("/", homeRoutes);
router.use("/api/comments", commentRoutes);
router.use("/api/posts", postRoutes);
router.use("/api/users", userRoutes);

module.exports = router;