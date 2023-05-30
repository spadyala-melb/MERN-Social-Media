import { useContext } from "react";
import { MessagesContext } from "../context/messages/messagesContext";

export const useMessagesContext = () => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error("No such context");
  }

  return context;
};
