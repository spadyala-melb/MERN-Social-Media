import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getTimelinePosts,
} from "../controllers/postController.js";

const router = express.Router();

//  create a post
router.post("/", createPost);
//  update post
router.put("/:id", updatePost);
//  delete post
router.delete("/:id", deletePost);
// get a post
router.get("/:id", getPost);
// get timeline posts
router.get("/timeline/all", getTimelinePosts);

export default router;
