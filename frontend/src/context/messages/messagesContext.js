import { createContext, useReducer } from "react";
import { messagesReducer } from "./messagesReducer";

const initialContext = { messages: [] };

export const MessagesContext = createContext();

export const MessagesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messagesReducer, initialContext);

  return (
    <MessagesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MessagesContext.Provider>
  );
};
