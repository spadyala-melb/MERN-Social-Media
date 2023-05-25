import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("No such context");
  }

  return context;
};
