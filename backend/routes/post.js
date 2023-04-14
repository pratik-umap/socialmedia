const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getPostOfFollowing,
  updateCaption,
  commentOnPost,
  deleteComment,
} = require("../controllers/post");
const { isAunthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAunthenticated, createPost);

router
  .route("/post/:id")
  .get(isAunthenticated, likeAndUnlikePost)
  .put(isAunthenticated, updateCaption)
  .delete(isAunthenticated, deletePost);

router.route("/posts").get(isAunthenticated, getPostOfFollowing);

router
  .route("/post/comment/:id")
  .put(isAunthenticated, commentOnPost)
  .delete(isAunthenticated, deleteComment);

module.exports = router;
