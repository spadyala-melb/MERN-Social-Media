import { createContext, useEffect, useReducer } from "react";
import { userReducer } from "./userReducer";

const initialContext = { user: null };

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
