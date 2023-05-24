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
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// configure middleware for authentication
// router.use(authMiddleware);

//  register user
router.post("/register", registerUser);
// login user
router.post("/login", loginUser);
//  update user
router.put("/:id", authMiddleware, updateUser);
//  delete user
router.delete("/:id", authMiddleware, deleteUser);
// get a user
router.get("/:id", authMiddleware, getUser);
//  follow  a user
router.put("/:id/follow", authMiddleware, followUser);
//  unfollow a user
router.put("/:id/unfollow", authMiddleware, unfollowUser);
// get all users
router.get("/", authMiddleware, getAllUsers);

export default router;
