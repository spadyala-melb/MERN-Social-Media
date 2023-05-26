import { createContext, useReducer } from "react";
import { friendsReducer } from "./friendsReducer";

const initialContext = { friends: [] };

export const FriendsContext = createContext();

export const FriendsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(friendsReducer, initialContext);

  return (
    <FriendsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FriendsContext.Provider>
  );
};
