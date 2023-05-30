import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  likePost,
  getTimelinePosts,
  getUserPosts,
} from "../controllers/postController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

//  create a post
router.post("/", authMiddleware, createPost);
//  update post
router.put("/:id", authMiddleware, updatePost);
//  delete post
router.delete("/:id", authMiddleware, deletePost);
// get a post
router.get("/:id", authMiddleware, getPost);
//  like or dislike a post
router.put("/like/:id", authMiddleware, likePost);
// get timeline posts
router.get("/timeline/:id", authMiddleware, getTimelinePosts);
//get posts owned by a particular user
router.get("/user/:userId", authMiddleware, getUserPosts);

export default router;
