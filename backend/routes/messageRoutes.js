import express from "express";
import {
  createMessage,
  getMessage,
  getMessages,
} from "../controllers/messageController.js";

const router = express.Router();

// configure middleware for authentication
// router.use(authMiddleware);

//  create Message
router.post("/", createMessage);

// get a Message
router.get("/:id", getMessage);

// get all messages in a particular conversation
router.get("/conversations/:conversationId", getMessages);

export default router;
