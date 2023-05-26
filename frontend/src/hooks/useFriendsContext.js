import { useContext } from "react";
import { FriendsContext } from "../context/friends/friendsContext";

export const useFriendsContext = () => {
  const context = useContext(FriendsContext);
  if (!context) {
    throw new Error("No such context");
  }

  return context;
};
