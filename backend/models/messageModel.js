import mongoose from "mongoose";

// Define the schema
const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
      required: true,
    },
    senderId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Create a model from the schema
const Message = mongoose.model("Message", messageSchema);

// Export the model
export default Message;
