import mongoose from "mongoose";
import Conversation from "../models/conversationModel.js";

// create
export const createConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    const conversation = await Conversation.create({
      members: [senderId, receiverId],
    });
    // console.log(conversation);
    res.status(200).json(conversation);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

// get a single Conversation
export const getConversation = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "No such Conversation" });
  }

  try {
    const conversation = await Conversation.findById(id);
    if (!conversation) {
      return res.status(400).json({ msg: "No such Conversation" });
    }
    res.status(200).json(conversation);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// get All conversations related to an user
export const getConversations = async (req, res) => {
  const { userId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ msg: "No such Conversation" });
  }

  try {
    const conversations = await Conversation.find({ members: { $in: userId } });
    if (!conversations) {
      return res.status(400).json({ msg: "No such Conversation" });
    }
    res.status(200).json(conversations);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
