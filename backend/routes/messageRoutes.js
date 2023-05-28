import express from "express";
import { createMessage, getMessage } from "../controllers/messageController.js";

const router = express.Router();

// configure middleware for authentication
// router.use(authMiddleware);

//  create Message
router.post("/", createMessage);

// get a Message
router.get("/:id", getMessage);

export default router;
