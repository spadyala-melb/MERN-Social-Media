import mongoose from "mongoose";
import Message from "../models/messageModel.js";

// create
export const createMessage = async (req, res) => {
  const { conversationId, senderId, text } = req.body;

  try {
    const message = await Message.create({
      conversationId,
      senderId,
      text,
    });

    res.status(200).json(message);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

// get a single Message
export const getMessage = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "No such Message" });
  }

  try {
    const message = await Message.findById(id);
    if (!message) {
      return res.status(400).json({ msg: "No such Message" });
    }
    res.status(200).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// get all messages in a conversation
export const getMessages = async (req, res) => {
  const { conversationId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(conversationId)) {
    return res.status(400).json({ msg: "No such Message" });
  }

  try {
    const messages = await Message.find({ conversationId: conversationId });
    if (!messages) {
      return res.status(400).json({ msg: "No Messages found" });
    }
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
