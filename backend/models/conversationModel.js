import mongoose from "mongoose";

// Define the schema
const conversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

// Create a model from the schema
const Conversation = mongoose.model("Conversation", conversationSchema);

// Export the model
export default Conversation;
