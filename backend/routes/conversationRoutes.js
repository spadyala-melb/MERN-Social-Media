import express from "express";
import {
  createConversation,
  getConversation,
  getConversations,
} from "../controllers/conversationController.js";

const router = express.Router();

// configure middleware for authentication
// router.use(authMiddleware);

router.post("/", createConversation);

router.get("/:id", getConversation);

router.get("/user/:userId", getConversations);

export default router;
