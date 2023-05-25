import { createContext, useEffect, useReducer } from "react";

const initialContext = { posts: [] };

export const PostsContext = createContext();

export const postsReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        posts: action.payload,
      };
    case "ADD_POST":
      return {
        posts: [action.payload, ...state.posts],
      };
    case "DELETE_POST":
      return {
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case "UPDATE_POST":
      // console.log("action.payload: ", action.payload.post._id);
      let newPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          return {
            ...post,
            likes: [...post.likes, post.likes.push(action.payload.userId)],
          };
        } else {
          return post;
        }
      });
      console.log("newposts: ", newPosts);
      return {
        posts: newPosts,
      };
    default:
      return {
        state,
      };
  }
};

export const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialContext);

  //   useEffect(() => {
  //     const user = JSON.parse(localStorage.getItem("user"));

  //     if (user) {
  //       dispatch({ type: "LOGIN", payload: user });
  //     }
  //   }, []);

  return (
    <PostsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};
