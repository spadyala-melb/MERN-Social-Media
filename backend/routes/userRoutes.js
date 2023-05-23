import express from "express";
import {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
  getAllUsers,
} from "../controllers/userController.js";

const router = express.Router();

//  register user
router.post("/register", registerUser);
// login user
router.post("/login", loginUser);
//  update user
router.put("/:id", updateUser);
//  delete user
router.delete("/:id", deleteUser);
// get a user
router.get("/:id", getUser);
//  follow  a user
router.put("/:id/follow", followUser);
//  unfollow a user
router.put("/:id/unfollow", unfollowUser);
// get all users
router.get("/", getAllUsers);

export default router;
