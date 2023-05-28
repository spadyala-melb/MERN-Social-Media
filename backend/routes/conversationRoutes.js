import express from "express";
import {
  createConversation,
  getConversation,
} from "../controllers/conversationController.js";

const router = express.Router();

// configure middleware for authentication
// router.use(authMiddleware);

router.post("/", createConversation);

router.get("/:id", getConversation);

export default router;
