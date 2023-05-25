import { useContext } from "react";
import { FriendsContext } from "../context/friendsContext";

export const useFriendsContext = () => {
  const context = useContext(FriendsContext);
  if (!context) {
    throw new Error("No such context");
  }

  return context;
};
