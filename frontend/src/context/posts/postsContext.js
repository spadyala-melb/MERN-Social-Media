import { createContext, useReducer } from "react";
import { postsReducer } from "./postsReducer";

const initialContext = { posts: [], isSearchActive: false, foundPosts: [] };

export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialContext);

  return (
    <PostsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};
