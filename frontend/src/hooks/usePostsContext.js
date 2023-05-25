import { useContext } from "react";
import { PostsContext } from "../context/postsContext";

export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("No such context");
  }

  return context;
};
