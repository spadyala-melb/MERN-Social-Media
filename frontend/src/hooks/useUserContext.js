import { useContext } from "react";
import { UserContext } from "../context/userContext";

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("No such context");
  }

  return context;
};

export default useUserContext;
