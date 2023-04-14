const express = require("express");
const { isAunthenticated } = require("../middlewares/auth");
const {
  register,
  login,
  followUser,
  logout,
  updatePassword,
  updateProfile,
  deleteMyProfile,
  myProfile,
  getUserProfile,
  getAllUsers,
  forgotPassword,
  resetPassword,
  getMyPosts,
  getUserPosts,
} = require("../controllers/user");

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/follow/:id").get(isAunthenticated, followUser);

router.route("/update/password").put(isAunthenticated, updatePassword);

router.route("/update/profile").put(isAunthenticated, updateProfile);

router.route("/delete/me").delete(isAunthenticated, deleteMyProfile);

router.route("/me").get(isAunthenticated, myProfile);

router.route("/user/:id").get(isAunthenticated, getUserProfile);

router.route("/my/posts").get(isAunthenticated, getMyPosts);

router.route("/userposts/:id").get(isAunthenticated, getUserPosts);

router.route("/users").get(isAunthenticated, getAllUsers);

router.route("/forgot/password").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

module.exports = router;
